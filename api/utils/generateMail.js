const nodemailer = require("nodemailer");

const generateMail = async (email,otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ecomm561@gmail.com",
      pass: "hgqiiazeqjsaykhf",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Email content
  const mailOptions = {
    from: "ecomm561@gmail.com",
    to: email,
    subject: "Your One-Time Password (OTP) for Website Registration",
    text: `Thank you for choosing to register on our website! We're excited to have you join our community.

    To complete your registration, please use the following One-Time Password (OTP):
    
    OTP: ${otp}
    
    Please ensure you keep this OTP confidential and do not share it with anyone. It's essential for the security of your account.
    
    If you did not request this OTP or encounter any issues during the registration process, please contact our support team at 19516uttam@gmail.com for assistance.
    
    Once you've entered the OTP successfully, you'll gain access to all the exciting features and content on our website. We're confident that you'll have a great experience with us!
    
    Thank you for choosing BuyBox. We look forward to seeing you online and hope you enjoy your time with us.`,
  };

  // Send the email
  const info = await transporter.sendMail(mailOptions);
};

module.exports = generateMail;
