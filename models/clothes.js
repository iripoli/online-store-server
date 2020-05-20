const mongoose = require('mongoose')

const Clothes = mongoose.model('clothes', new mongoose.Schema({
  price: Number,
  name:String,
  size: {
    type: String,
    enum: ['s','m','l' ]
  },
  picture: String,
  footsize:{
    type: Number,
    min: 20,
    max: 50
  },
  type:{
    type: String,
    enum:['jacket', 'sneaker', 'hat', 'shirt', 'pants']
  }, 
  sex:{
    type: String,
    enum: ['m', 'f'],
  }
}))

module.exports = Clothes