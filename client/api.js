import request from 'superagent'

export function getAllDate (searchIndex) {
  return request
    .get('/v1/calendar/' + searchIndex)
    .then(res => {
      return res.body.rows
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

// send email
export function sendEmail (emailInfo) {
  return request.post('/v1/apiRouter/sendEmail')
    .send(emailInfo)
    .then(res => {
      return res
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      return err
      // console.error(res.status)
    })
}

// Send sms
export function sendSms (smsInfo) {
  return request.post('/v1/apiRouter/sendSms')
    .send(smsInfo)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    // console.error(res.status)
    })
}
