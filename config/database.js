const mongoose = require('mongoose')
const express = require('express')

const app = express()

const DB_URI = process.env.DB_URI || 'mongodb+srv://iripoli:julian96@cluster0-12hh1.mongodb.net/online-store?retryWrites=true&w=majority'

mongoose.connect(DB_URI, { useNewUrlParser: true })
  .then(()=>console.log(`Connected to DB....`))
  .catch((err)=>console.log(`Error conecting to DB ${DB_URI}`, err.message))

