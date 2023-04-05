const express=require("express")
const router = new express.Router()
const { sendMail } = require("../mails/sendMails.js")
router.get("/test",(req,res)=>{
    res.send({
        name:"server is working"
    })
})

router.post("/sendMail",(req,res)=>{
    const mail = req.body.mail
    try{

        sendMail(mail)
        console.log("Mail was sent")
        res.status(200).send({msg : "Mail sent successfully"})

    }catch(e){
        console.log(e)
        res.status(400).send({error:"unable to send mail"})
    }
})


module.exports = router