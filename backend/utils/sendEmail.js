const nodemailer = require('nodemailer')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
exports.sendEmail = catchAsyncErrors(async(req,res,next)=>{
   
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Kilothlon👻" <kil@kilothlon.com>', // sender address
      to: "sarangforsites@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      html: "<b>Hello world?</b>", // html body
    });
    
    if(info.messageId){
        res.status(200).json({
            success:true,
            message:"Email Sent"
        })
    }else res.status(403).json({
        success:false,
        message:"Email Not Sent"
    })
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    
})