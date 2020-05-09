"use strict";
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  async main(email, name, message) {

    console.log(process.env.GMAILMDP);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'simonchardon87@gmail.com',
        pass: process.env.GMAILMDP // naturally, replace both with your real credentials or an application-specific password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${name} - ${email}`, // sender address
      to: "simonchardon87@gmail.com", // list of receivers
      subject: "Message depuis mon site", // Subject line
      text: message, // plain text body
      html: `<b>${email}  -  ${message}</b>` // html body
    });

  }
}
// async..await is not allowed in global scope, must use a wrapper



