const express =require('express')
const app=express()
const fs=require('fs')
const fsPromies=fs.promises
const path=require('path')

const logEmitter=async(req,res,next)=>{
  const date =new Date().toLocaleString()
     const date1=date.split(",")
     const log=`${date1[0]}${date1[1]} \t${req.method} ${req.url} \n`
    if(!fs.existsSync("File")){
      await fsPromies.mkdir(path.join(__dirname,"File"))
    }
   await fsPromies.appendFile(path.join(__dirname,"File","logEmitter.txt"),log,"utf-8")
   next()
  }
module.exports=logEmitter