const express = require('express')
const router = express.Router()
const Email = require('../models/email')
const nodemailer = require('nodemailer')

router.use(express.urlencoded({extended: false}))

router.get('/',(req,res)=>{
    res.render('admin')
})


const transport =nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kartikenkrb@gmail.com',
        pass: 'ckugjumqeyujeawc'
    }
})

// const messageTrial = {
//     from: 'vishalkrb123@gmail.com',
//     to: 'kartikenkrb@gmail.com',
//     subject: 'Hello There!',
//     text: 'How are you doing? We are going to conduct an online Stock Hunt Event!',
//     html: '<button style="background-color: tomato; border: none; padding: 10px; font-size: 1.5rem;">Register Here!</button><p>Hello there...</p>',
//     // attachments: [
//     //     { // Use a URL as an attachment
//     //       filename: 'your-testla.png',
//     //       path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048'
//     //   }
//     // ]
// }


router.post('/',async(req,res)=>{

    const registeredUsers = await Email.find()
    const to = []
    registeredUsers.forEach((user)=>{
        to.push(user.email)
    })

    const message = {
        from: 'kartikenkrb@gmail.com',
        to
    }
    message.subject = req.body.subject
    message.text = req.body.content



    transport.sendMail(message,(err,info)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
            res.redirect('/sendEmail/success')
        }
    })
})

router.get('/success',(req,res)=>{
    res.render('success')
})

module.exports = router