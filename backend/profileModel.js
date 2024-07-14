const mongoose=require('mongoose')

const profileSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
}
)
const model=mongoose.model('user',profileSchema)

module.exports=model