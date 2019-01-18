import React from 'react'
import {getStyles} from '../lib/common'

class Mainbody extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }

  componentDidMount () {

  }

  render () {
    // let isLogined = this.state.login
    // let loginEmail = this.state.loginEmail
    return (

      <div>
        {/* start div---------------------------------------------------------------- */}

        <section id="intro" className="wow fadeIn">

          <div className="intro-content">
            <h2>Making <span>your ideas</span><br/>happen!</h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
              <a href="#portfolio" className="btn-projects scrollto">Our Projects</a>
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
                  <img src="img/about-img.jpg" alt=""/>
                </div>

                <div className="col-lg-6 content">
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                  <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>

                  <ul>
                    <li><i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                  </ul>

                </div>
              </div>

            </div>
          </section>

          <section id="services">
            <div className="container">
              <div className="section-header">
                <h2>Services</h2>
                <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>

              <div className="row">

                <div className="col-lg-6">
                  <div className="box wow fadeInLeft">
                    <div className="icon"><i className="fa fa-bar-chart"></i></div>
                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="box wow fadeInRight">
                    <div className="icon"><i className="fa fa-picture-o"></i></div>
                    <h4 className="title"><a href="">Dolor Sitema</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="icon"><i className="fa fa-shopping-bag"></i></div>
                    <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade.</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="box wow fadeInRight" data-wow-delay="0.2s">
                    <div className="icon"><i className="fa fa-map"></i></div>
                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <section id="clients" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Clients</h2>
                <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>

              <div className="owl-carousel clients-carousel">
                <img src="img/clients/client-1.png" alt=""/>
                <img src="img/clients/client-2.png" alt=""/>
                <img src="img/clients/client-3.png" alt=""/>
                <img src="img/clients/client-4.png" alt=""/>
                <img src="img/clients/client-5.png" alt=""/>
                <img src="img/clients/client-6.png" alt=""/>
                <img src="img/clients/client-7.png" alt=""/>
                <img src="img/clients/client-8.png" alt=""/>
              </div>

            </div>
          </section>

          <section id="portfolio" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Our Portfolio</h2>
                <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row no-gutters">

                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/1.jpg" className="portfolio-popup">
                      <img src="img/portfolio/1.jpg" alt=""/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 1</h2></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/2.jpg" className="portfolio-popup">
                      <img src="img/portfolio/2.jpg" alt=""/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 2</h2></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/3.jpg" className="portfolio-popup">
                      <img src="img/portfolio/3.jpg" alt=""/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 3</h2></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/4.jpg" className="portfolio-popup">
                      <img src="img/portfolio/4.jpg" alt=""/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 4</h2></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/5.jpg" className="portfolio-popup">
                      <img src="img/portfolio/5.jpg" alt=""/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 5</h2></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/6.jpg" className="portfolio-popup">
                      <img src="img/portfolio/6.jpg" alt=""/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 6</h2></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/7.jpg" className="portfolio-popup">
                      <img src="img/portfolio/7.jpg" alt=""/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 7</h2></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/8.jpg" className="portfolio-popup">
                      <img src="img/portfolio/8.jpg" alt=""/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 8</h2></div>
                      </div>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <section id="testimonials" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Testimonials</h2>
                <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>
              <div className="owl-carousel testimonials-carousel">

                <div className="testimonial-item">
                  <p>
                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
                  </p>
                  <img src="img/testimonial-1.jpg" className="testimonial-img" alt=""/>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>

                <div className="testimonial-item">
                  <p>
                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
                  </p>
                  <img src="img/testimonial-2.jpg" className="testimonial-img" alt=""/>
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>

                <div className="testimonial-item">
                  <p>
                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
                  </p>
                  <img src="img/testimonial-3.jpg" className="testimonial-img" alt=""/>
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>

                <div className="testimonial-item">
                  <p>
                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
                  </p>
                  <img src="img/testimonial-4.jpg" className="testimonial-img" alt=""/>
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>

                <div className="testimonial-item">
                  <p>
                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
                  </p>
                  <img src="img/testimonial-5.jpg" className="testimonial-img" alt=""/>
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>

              </div>

            </div>
          </section>

          <section id="call-to-action" className="wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 text-center text-lg-left">
                  <h3 className="cta-title">Call To Action</h3>
                  <p className="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                  <a className="cta-btn align-middle" href="#">Call To Action</a>
                </div>
              </div>

            </div>
          </section>

          <section id="team" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Our Team</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/team-1.jpg" alt=""/></div>
                    <div className="details">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/team-2.jpg" alt=""/></div>
                    <div className="details">
                      <h4>Sarah Jhinson</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/team-3.jpg" alt=""/></div>
                    <div className="details">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/team-4.jpg" alt=""/></div>
                    <div className="details">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

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
                    <address>A108 Adam Street, NY 535022, USA</address>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="contact-phone">
                    <i className="ion-ios-telephone-outline"></i>
                    <h3>Phone Number</h3>
                    <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="contact-email">
                    <i className="ion-ios-email-outline"></i>
                    <h3>Email</h3>
                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                  </div>
                </div>

              </div>
            </div>

            {/* <div id="google-map" data-latitude="40.713732" data-longitude="-74.0092704"></div> */}

            <div className="container">
              <div className="form">
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" className="contactForm">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div className="validation"></div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>
          </section>

        </main>

        {/* end div---------------------------------------------------------------- */}
      </div>
    )
  }
}

export default Mainbody
