const express=require('express')
const path=require('path')
const mailsRouter= require('./routers/mails.js')

const app=express()

const port=process.env.PORT || 4000

app.use(express.json())
app.use(mailsRouter)

app.listen(port,()=>{
    console.log("server is up and running on ",port)
})