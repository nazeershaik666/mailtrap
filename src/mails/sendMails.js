const nodemailer = require("nodemailer");


const sendMail = (mail) =>{  
    // console.log("acounts ",company,title,exp,respons,worktype,emptype,empbenefits)
     const send={
         from:"mailtrap@naveenrio.me",
         to: mail,
         subject:`This is a test mail from MailTrap`,
         html:`<div> Hi, this is a test mail from Mailtrap </div>`
     }
   
     nodemailer.createTransport({
       host: "live.smtp.mailtrap.io",//sandbox.smtp.mailtrap.io",
       port: 587,
       auth: {
         user: "api",//86207576053cfe",
         pass: "82bc5abcc46929231dcc93949027783b"//df87b6e5a6cb1d"
       }
     }).sendMail(send,(err)=>{
       if(err){
        return console.log("error occurs",err)
        
       }else{
       return console.log("email sent")
       }
   })
   }



   module.exports={ sendMail }