"use strict";
const nodemailer = require("nodemailer");

module.exports = {
  async main(email, name, message) {


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 	'chasity54@ethereal.email', // generated ethereal user
        pass: 'sFSqtCmQYDzQsRndSS' // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${name} - ${email}`, // sender address
      to: "chasity54@ethereal.email", // list of receivers
      subject: "message from my website", // Subject line
      text: message, // plain text body
      html: `<b>${message}</b>` // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }


}
// async..await is not allowed in global scope, must use a wrapper


