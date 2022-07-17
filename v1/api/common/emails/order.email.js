// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript

const { formatDate } = require('../utils/time.helpers')

const SendOrderEMail = async (customerEmail, customerName, quantity, deliveryDate, update) => {
  const { SENDGRID_API_KEY, SENDER_EMAIL } = process.env
  const date = formatDate(deliveryDate)
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(SENDGRID_API_KEY)
  const msg = {
    to: customerEmail,
    from: `NutsAvaliable <${SENDER_EMAIL}>`,
    cc: SENDER_EMAIL,
    replyTo: SENDER_EMAIL,
    subject: `Dear ${customerName}, we got your order`,
    html: `Hello ${customerName} <br/><strong>Your ${update ? 'updated '+ quantity : quantity} quantity of our nuts</strong> has been booked for ${date}. <br /> Thanks`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })

}

module.exports = { SendOrderEMail }