const express = require('express')
const router = express.Router()
const Email = require('../models/email')
const nodemailer = require('nodemailer')

router.use(express.urlencoded({extended: false}))

router.get('/',(req,res)=>{
    res.render('admin.html')
    // res.sendFile('admin.html', {root: publicDirPath})
})

// router.get('/success',(req,res)=>{
//     console.log('hey')
//     res.sendFile('success.html', {root : __dirname + '../public'})

// })

const transport =nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '03832e2a9c5b33',
        pass: '6b6cb373a85922'
    }
})

const message = {
    from: 'icell@nitkkr.ac.in',
    to: 'kartikenkrb@gmail.com',
    subject: 'Hello There!',
    text: 'How are you doing? We are going to conduct an online Stock Hunt Event!',
    html: '<button style="background-color: tomato; border: none; padding: 10px; font-size: 1.5rem;">Register Here!</button><p>Hello there...</p>',
    // attachments: [
    //     { // Use a URL as an attachment
    //       filename: 'your-testla.png',
    //       path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048'
    //   }
    // ]
}


router.post('/',(req,res)=>{
    transport.sendMail(message,(err,info)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
            console.log("ok")
            res.redirect('/sendEmail/success')
        }
    })
})

module.exports = router