const express =require('express')
const app=express()
const mongoose=require('mongoose')
const Router=require('./routes/router.js')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const logEmitter=require('./logEmitter.js')
require('dotenv').config()
const PORT=process.env.SERVER_PORT||5000

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('mongoDB Connected'))
.catch((err)=>{
    console.log(err.message)}
)
app.use(cors({
    origin:["https://deploy-two-tan.vercel.app/"],
    methods:["GET","POST"],
    credentials:true
    
}))
app.use(logEmitter)
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(Router)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
