const mongoose = require('mongoose')

mongoose.model('db', new mongoose.Schema({
  clothes:{
    price: Number,
    name:String,
    size: [s, m, l],
    picture: BinData,
    footsize:Number,
    type: [jacket, sneaker, hat, shirt],
    sex: [m, f],
    admin:Boolean,
  },
  user:{
    username: String,
    email: String,
    name: String,
    shopBag: Array,
    
  }
}))