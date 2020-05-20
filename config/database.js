const mongoose = require('mongoose')
const express = require('express')

const app = express()

const DB_URI = process.env.DB_URI || 'mongodb://localhost/react-store'

mongoose.connect(DB_URI, { useNewUrlParser: true })
  .then(()=>console.log(`Connected to DB ${DB_URI}`))
  .catch((err)=>console.log(`Error conecting to DB ${DB_URI}`, err.message))

