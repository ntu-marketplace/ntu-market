const nodemailer = require('nodemailer')

exports.generateOTP = () => {
  const otp = `${Math.floor(1000 + Math.random() * 9000)}`
  return otp;
}

exports.mailTransport = () => 
  nodemailer.createTransport({
    host:"sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD
    }
  })

  exports.generateEmailTemplate = code => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <style>
      @media only screen and (max-width: 620px){
        h1{
          font-size: 20px;
          padding: 5px;
        }
      }
      </style>
    </head>
    <body>
      <div>
        <div style="max-width: 620px; margin: 0 auto; font-family:
        sans-serif; color: #272727;">
          <h1 style="background: #f6f6f6; padding: 10px; text-align:
          center; color: #272727;">Welcome to NTU Market</h1>
          <p>Please Verify Your Email to Continue Your verification code
          is:</p>
          <p style ="width: 80px; margin: 0 auto; font-weight: bold;
          text-align: center; background: #f6f6f6; border-radius: 5px;
          font-size: 25px;">${code}</p>
        </div>
      </div>
    </body>
  </html>
    `;
  }