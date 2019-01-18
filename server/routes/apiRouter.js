const authKey = require('../../authTwilio.json')
const express = require('express')
const db = require('../db')
const router = express.Router()
var nodemailer = require('nodemailer')

router.post('/sendEmail', (req, res) => {
  const emailInfo = req.body

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'globalmaster777@gmail.com',
      pass: 'blackvenus!'
    }
  })

  const mailOptions = {
    from: '', // sender address
    to: '', // list of receivers
    subject: '', // Subject line
    html: ''// plain text body
  }

  let htmlMessage = `<p>Thank you for sending email me. This is the auto response email system that I develop</p> 
                     <tr> <td><img src="https://www.ielts.org/-/media/content-blocks/four-ielts-skills.ashx?h=156&w=276&la=en&hash=63A7FF558EA018B9479B964C68808ADA891058FC"></td> 
                     </tr> <p>
                       <h3>I am one of the best-equipped, best-prepared developer who has a passion for IT and contribute to a team</h3>
                        <ul>
                          <li> Fast learner who has willingness to learn new codes and frameworks</li>
                          <li> Love working together to create great web applications.</li>
                          <li> Passionate about solving problems using data and analytics </li>
                          <li> Perform well under pressure in agile development process</li>
                        </ul>
                     </p>`

  switch (emailInfo.reqType) {
    case '1': // from guest to me
      mailOptions.from = 'globalmaster777@gmail.com'
      mailOptions.to = 'sjpark731015@gmail.com'
      mailOptions.subject = emailInfo.subject // Subject line
      mailOptions.html = emailInfo.message// plain text body
      break

    case '2': // to guest
      mailOptions.from = 'sjpark731015@gmail.com'
      mailOptions.to = emailInfo.email
      mailOptions.subject = 'Hi I am Shane, a full stack developer' // Subject line
      mailOptions.html = htmlMessage// plain text body
      break

    case '3': // for Marketing
      mailOptions.subject = 'SeekMentor send IELTS TIPs for you' // Subject line
      mailOptions.html = '<p>Accepted as evidence of English proficiency by 10,000 institutions</p> <tr> <td><img src="https://www.ielts.org/-/media/images/resources/ielts-for-study.ashx?h=285&w=460&la=en&hash=84B5EF610AD841BEE11570E63636A1057838FE1D"></td> </tr> <p>An IELTS certificate is recognised as evidence of proficiency in English by more than 10,000 education and training providers worldwide. Some universities in non-English speaking countries require an IELTS score, where courses are taught in English.</p>'// plain text body
      break

    default:
      mailOptions.subject = 'SeekMentor send test email for you' // Subject line
      mailOptions.html = '<p>This is test email</p>'// plain text body
  }

  transporter.sendMail(mailOptions)
    .then(info => {
      //console.log(res)
      res.json({info}) // assingned res.body.info by object
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to send email')
    })
})

router.post('/sendSms', (req, res) => {
  const smsInfo = req.body
  const myPhoneNo = '+64273690088'
  let sender = smsInfo.sender //guest phone
  let receiver = myPhoneNo
  let text = `From:[${sender}]: ${smsInfo.message}`
  if (smsInfo.reqType === '2') { // send out auto reply sms to guest
    receiver = sender
    text = `From:[${myPhoneNo}]: Hi I am Shane who fullstack web developer, I will reply soon`
  }

  // console.log('apiRoute smsInfo-->', smsInfo)

  // twilio cinfig setting
  const accountSid = authKey.accountSid
  const authToken = authKey.authToken
  const relayPhone = authKey.relayPhone
  const client = require('twilio')(accountSid, authToken)

  client.messages
    .create({from: relayPhone, body: text, to: receiver})
    .then(message => {
      res.json({message})
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(err.status).send(err.message)
    })
})

module.exports = router
