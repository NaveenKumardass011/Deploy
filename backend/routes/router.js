const express =require('express')
const Router=express.Router()
const profileModel=require('../profileModel.js')
const jwt=require('jsonwebtoken')
const bycrypt=require('bcrypt')
const salt=10

Router.post('/register',async(req,res)=>{
   const{username,email,password}=req.body
   const bycPassword= await bycrypt.hash(password.toString(),salt)
  const emailCheck=await profileModel.findOne({email})
  if(!emailCheck){
   
   const newuser=await profileModel.create({username,email,password:bycPassword})
   console.log(newuser)
   res.json({result:"Created"})
  }
  else{
    res.json({error:"This Email Address Already Exists"})
  }

 })

Router.post('/login',async(req,res)=>{
  const{email,password}=req.body
  if(email&&password){
    const emailCheck=await profileModel.findOne({email})
    if(!emailCheck){
    return res.json({error:"Email Address Doesn't Exists"}) 
    }
    else{
        bycrypt.compare(password.toString(),emailCheck.password,(err,responce)=>{
          if(err){
            console.log(err.message)
          }
          if(responce){
           const token= jwt.sign({email:emailCheck.email,name:emailCheck.username},"naveen-first-project",{expiresIn:"1m"})
           res.cookie("token",token)
           return res.json({result:"Success"})
          }
          else{
            return res.json({error:"Password Incorrect"})
          }
         })
    }
}else{
  res.json({error:"Email and Password are Required"})
}
  
})
const verifyUser=(req,res,next)=>{
  const token=req.cookies.token
  if(!token){
    return res.status(401).json({error:"Token Not Available"})
  }
  jwt.verify(token,"naveen-first-project",(err,encoded)=>{
   if(err){
     res.status(403).json({error:err.message})
    return console.log("error:",err.message)
   }
   if(encoded){
    req.user={userDetails:encoded,result:"Success"}
     return next()
   }
  })
}
Router.get("/home",verifyUser,(req,res)=>{
    res.send(req.user)

   
})
Router.get("/logout",(req,res)=>{
   res.clearCookie("token")
   res.json({result:"logout"})
})


module.exports=Router