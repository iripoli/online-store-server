const mongoose = require('mongoose')
const Joi = require('joi')

const Users = mongoose.model('Users', new mongoose.Schema({
    admin: {
      type:Boolean,
      default: false
    },
    username: {
      type:String,
      lowercase:true,
      minlength:5,
      maxlength:15,
      required: true
    },
    password:{
      type:String,
      minlength:8,
      maxlength:15,
      required:true,
    },
    email: {
      type:String,
      lowercase:true,
      required: true
    },
    name: {
      type:String,
      lowercase:true,
      minlength:4,
      maxlength:30,
      required: true
    },
    shopBag: {
      type:Array,
      default: []
    },
    sex:{
      type: String,
      enum: ['m', 'f', 'no-binary', 'secret'],
    } 
}))

 const validateData = (data)=>{
   const schema = Joi.object({
     admin: Joi.boolean(),
     username: Joi.string().min(5).max(30).required(),
     email: Joi.string().email().required(),
     name:Joi.string().min(4).max(30).required(),
     password:Joi.string().min(8).max(15).required(),
     shopBag:Joi.array(),
     sex:Joi.string()
   })
   return Joi.validate(data, schema)
 }


exports.Users = Users
exports.validateData = validateData