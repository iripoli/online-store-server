const mongoose = require('mongoose')
const Joi = require('joi')

const Clothes = mongoose.model('clothes', new mongoose.Schema({
  price: Number,
  name:{
    type: String,
    lowercase: true,
    required: true
  },
  size: {
    type: Array,
    lowercase: true
  },
  picture: {
    type:String,
    required:true
  },
  footsize:{
    type: Array
  },
  type:{
    type: String,
    enum:['jacket', 'sneaker', 'hat', 'shirt', 'pants'],
    lowercase: true,
    required: true

  }, 
  sex:{
    type: String,
    enum: ['m', 'f', 'unisex'],
    lowercase: true,
    required: true
  }
}))

const validateData = (data)=>{
  const schema = Joi.object({
    price: Joi.number().required(),
    name: Joi.string().required(),
    size: Joi.array(),
    picture: Joi.string().required(),
    footsize: Joi.array(),
    type:Joi.string().required(),
    sex:Joi.string().required()
  })
 return Joi.validate(data, schema)
}

exports.Clothes = Clothes
exports.validateData = validateData