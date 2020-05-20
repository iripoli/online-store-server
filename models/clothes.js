const mongoose = require('mongoose')
const Joi = require('joi')

const Clothes = mongoose.model('clothes', new mongoose.Schema({
  price: Number,
  name:{
    type: String,
    lowercase: true
  },
  size: {
    type: String,
    enum: ['s','m','l' ],
    lowercase: true

  },
  picture: String,
  footsize:{
    type: Number,
    min: 20,
    max: 50
  },
  type:{
    type: String,
    enum:['jacket', 'sneaker', 'hat', 'shirt', 'pants'],
    lowercase: true

  }, 
  sex:{
    type: String,
    enum: ['m', 'f', 'unisex'],
    lowercase: true

  }
}))

const validateData = (data)=>{
  const schema = Joi.object({
    price: Joi.number().required(),
    name: Joi.string().required(),
    size: Joi.string(),
    picture: Joi.string().required(),
    footsize: Joi.number().max(50).min(20),
    type:Joi.string().required(),
    sex:Joi.string().required()
  })
 return Joi.validate(data, schema)
}

exports.Clothes = Clothes
exports.validateData = validateData