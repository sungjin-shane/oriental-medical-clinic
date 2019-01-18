import React from 'react'
import {getStyles, checkProperties, validateEmail, validPhoneNo} from '../lib/common'
import {sendSms, sendEmail} from '../api'
import projectList from '../lib/projectList.json'
import techSkill from '../lib/techSkill.json'

class Mainbody extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSending: false,
      projects: projectList,
      skillSet: techSkill
    }
    this.sendingEmail = this.sendingEmail.bind(this)
    this.sendSmsMsg = this.sendSmsMsg.bind(this)
    this.renderLoader = this.renderLoader.bind(this)
    // this.callSms = this.callSms.bind(this)
    // this.callEmail = this.callEmail.bind(this)
  }

  renderLoader () {
    if (this.state.isSending === true) {
      return (
        <div id="preloader"></div>
      )
    }
  }

  callEmail (emailInfo) {
    sendEmail(emailInfo)
      .then(res => {
        this.setState({isSending: false})
        // eslint-disable-next-line
      console.log('res.status code:', res.status)
        if (res.status === 200) { // success: res.status code: 200
          document.getElementById('staticMsg').value = 'Your message was successfully sent to '.concat(res.body.info.accepted)
        } else { // eMail server internal error
          document.getElementById('staticMsg').value = 'Email server internal error [error code:500]'
        }
      })
      .catch(err => {
      // eslint-disable-next-line
      console.error(err)
      })
  }

  sendingEmail () {
    const emailInfo = {
      reqType: '1', // from guest to me
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    }

    let rtnVal = checkProperties(emailInfo)
    if (!validateEmail(emailInfo.email)) {
      alert('check the email address!')
      return
    }

    this.setState({isSending: true})

    if (rtnVal === true) {
      this.callEmail(emailInfo)
      emailInfo.reqType = '2' // send email to guest
      this.callEmail(emailInfo)
    } else {
      let message = 'Please entere your '.concat(rtnVal)
      alert(message)
    }
  }

  sendSmsMsg () {
    let smsInfo = {
      reqType: '1', // from guest to me
      sender: document.getElementById('phone').value,
      message: document.getElementById('smsText').value
    }

    if (!validPhoneNo(smsInfo.sender)) {
      alert('check your phone number.')
      return
    }

    let rtnVal = checkProperties(smsInfo)

    if (rtnVal === true) {
      this.callSms(smsInfo) // send to me
    } else {
      alert('leave your message.')
    }

    // twilio trial accoun cannot send unverified number.
    // smsInfo.reqType = '2'
    // this.callSms(smsInfo) // send to guest number
  }

  callSms (smsInfo) {
    this.setState({isSending: true})
    sendSms(smsInfo)
      .then(res => {
        this.setState({isSending: false})
        if (res.status === 200) { // success: res.status code: 200
          document.getElementById('smsText').value = 'It was successfully sent SMS '
        } else { // eMail server internal error
          document.getElementById('smsText').value = 'SMS server internal error'
        }
      })
      .catch(err => {
        // eslint-disable-next-line
        console.error(err)
        document.getElementById('smsText').value = 'SMS server internal error'
      })
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        {/* start div---------------------------------------------------------------- */}

        <section id="intro" className="wow fadeIn">

          <div className="intro-content">Here my everything counts all
            <h2>Full-stack developer</h2><h3>Auckland, NZ</h3>
            <div>
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
              <a href="#portfolio" className="btn-projects scrollto">My Projects</a>
            </div>
          </div>

          <div id="intro-carousel" className="owl-carousel" >
            <div className="item" style={getStyles(1)}></div>
            <div className="item" style={getStyles(2)}></div>
            <div className="item" style={getStyles(3)}></div>
            <div className="item" style={getStyles(4)}></div>
            <div className="item" style={getStyles(5)}></div>
          </div>

        </section>

        <main id="main">

          <section id="about" className="wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 about-img">
                  <img src="img/fullstack.png" alt=""/>
                </div>
                <div className="col-lg-6 content">
                  <h2>HI~ I am Shnae, a full-stack web developer</h2>
                  <h3>I am one of the best-equipped, best-prepared developer who has a passion for IT and contribute to a team</h3>

                  <ul>
                    <li><i className="ion-android-checkmark-circle"></i> Fast learner who has willingness to learn new codes and frameworks</li>
                    <li><i className="ion-android-checkmark-circle"></i> Love working together to create great web applications.</li>
                    <li><i className="ion-android-checkmark-circle"></i> Passionate about solving problems using data and analytics </li>
                    <li><i className="ion-android-checkmark-circle"></i> Perform well under pressure in agile development process</li>
                  </ul>
                  <a href="https://sungjin-shane.github.io/blog-home.html" id="resume" className="btn btn-fill btn-info" data-button="info">My story of web development</a>

                </div>
              </div>
            </div>
          </section>

          <section id="portfolio" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Portfolio</h2>
                <p>Recently, I am passionate about react framework to create great web application. I am still developing a new application based on my great idea. These are my personal projects, and I would love to hear from you, whether its feedback on my projects or other suggestion</p>
              </div>
            </div>
            <div className="container">
              {/* Portfolio generate from json data========================================================== */}
              {this.state.projects.map(portfolio => {
                return <div className="row" key={portfolio.id}>
                  <div className="col-lg-6 about-img" >
                    <div className="portfolio-item wow fadeInUp">
                      <img src={`img/portfolio/${portfolio.id}.png`} alt=""/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">{portfolio.name}</h2></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 content">
                    <h2>{portfolio.name}</h2>
                    <p>{portfolio.desc}</p>
                    <ul>
                      <li>{portfolio.tech1}</li>
                      <li>{portfolio.tech2}</li>
                      <li>{portfolio.tech3}</li>
                    </ul>
                    <div className="row">
                      <div className="col-xs-8 col-sm-6">
                        <p className="text-center">
                          <a href={portfolio.url} id="resume" className="btn btn-success" data-button="info">Open App<i className="fa fa-chrome"></i></a>
                        </p>
                      </div>
                      <div className="col-xs-4 col-sm-6">
                        <p className="text-center">
                          <a href={portfolio.git} id="resume" className="btn btn-info" data-button="info">GitHub<i className="fa fa-github"></i></a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              })
              }
            </div>
          </section>

          <section id="skills">
            <div className="container">
              {/* skills generate from json data========================================================== */}
              <div className="section-header">
                <h2>Skills</h2>
                <p>I will provide technical support to ensure the timely delivery of team projects. </p>
              </div>

              <div className="row">
                {this.state.skillSet.map(skill => {
                  return <div className="col-lg-6" key={skill.id}>
                    <div className="box wow fadeInLeft">
                      <div className="icon"><i className={skill.icon}></i></div>
                      <h4 className="title">{skill.catName}</h4>
                      <ul className="list-inline">
                        {skill.list.map(list => {
                          return <li className="list-inline-item" key={list.id}><span className="badge badge-primary badge-pill">{list.name}</span></li>
                        })}
                      </ul>
                    </div>
                    <hr/>
                  </div>
                })}
              </div>
            </div>
          </section>

          <section id="call-to-action" className="wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center text-lg-left">
                  <h3 className="cta-title">Call To Action</h3>
                  <p className="cta-text"> I am quick and eager learner who thrives in a fast-paced environment and I am a great communicator who will enjoy working in a team.
                   Also, I love discussions about software design and crafting solutions. If you want to request for resume click the SMS button</p>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 text-center text-lg-left">
                    <input type="text" className="form-control" name="smsText" id="smsText" placeholder="Leave a message" />
                  </div>
                  <div className="col-lg-4 text-center text-lg-left">
                    <input type="email" className="form-control" name="phone" id="phone" placeholder="Mobile Phone +64-21-0123-5679" />
                  </div>
                  <div className="col-lg-2 text-center text-lg-left">
                    <button type="button" className="btn btn-warning" onClick={this.sendSmsMsg}>Send SMS</button>
                  </div>

                </div>
              </div>

            </div>
          </section>
          <hr/>

          <section id="contact" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Contact Us</h2>
                <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>

              <div className="row contact-info">

                <div className="col-md-4">
                  <div className="contact-address">
                    <i className="ion-ios-location-outline"></i>
                    <h3>Address</h3>
                    <address>Auckland, NewZealand</address>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="contact-phone">
                    <i className="ion-ios-telephone-outline"></i>
                    <h3>Phone Number</h3>
                    <p><a href="tel:+155895548855">+64 27 369 0088</a></p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="contact-email">
                    <i className="ion-ios-email-outline"></i>
                    <h3>Email</h3>
                    <p><a href="mailto:sjpark731015@gmail.com">sjpark731015@gmail.com</a></p>
                  </div>
                </div>

              </div>
            </div>

            <div className="container">
              <div className ="row">
                <h4 className="title"><i className="ion-android-checkmark-circle"></i>Get in touch with me using my auto email system</h4>
                <input className="form-control" type="text" id="staticMsg" value="" readOnly/>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputHeadline">Name</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />

                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputHeadline">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />

                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputHeadline">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />

              </div>
              <div className="form-group">
                <label htmlFor="inputHeadline">Message</label>
                <textarea className="form-control" name="message" id="message" rows="5" data-rule="required"></textarea>

              </div>
              <div className="text-center">
                <button type="button" className="btn btn-secondary" onClick={this.sendingEmail}>Send Email</button>
              </div>

            </div>
          </section>

          {this.renderLoader()}

        </main>

        {/* end div---------------------------------------------------------------- */}
      </div>
    )
  }
}

export default Mainbody
