require('../config/database')
const express = require('express')
const bodyParser = require("body-parser")

const usersRoutes = require('../routes/users')
const clothesRoutes = require('../routes/clothes')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (error, req, res, next) {
  if(error instanceof SyntaxError){ //Handle SyntaxError here.
    return res.status(500).send({data : "Invalid data"});
  } else {
    next();
  }
});


app.use('/api/users/', usersRoutes)
app.use('/api/clothes/', clothesRoutes)

const PORT = process.env.PORT || 3002
app.listen(PORT, ()=>console.log(`Listening to port: ${PORT}`))