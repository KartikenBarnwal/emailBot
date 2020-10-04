require('dotenv').config()
const express = require('express')
const path = require('path')
const Email = require('../models/email')
const sendEmailRouter = require('./sendEmail')
require('../db/mongoose')

const app = express()
const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname + '../views')

app.set('view engine', 'ejs');
app.set('views', viewsPath);
// app.engine('html', require('ejs').renderFile);

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/sendEmail',sendEmailRouter)
app.use(express.static(publicDirPath))


app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/subscribe',async(req,res)=>{
    const user = new Email()
    try{
        user.email = req.body.email
        await user.save()
        console.log(req.body.email+" has been successfully Registered!")    
        res.redirect('/')
    }
    catch(e){
        res.redirect('/')
        console.log('Error!',e)
    }
})

app.listen(port,()=>{
    console.log('Server is up on '+port)
})