const express = require('express')

const { Users , validateData } = require('../models/users')

const router = express.Router()


//GET ALL
router.get('/', async (req, res)=>{
  const users = await Users.find()
  console.log(users)
  res.send(users)
})

//POST A NEW USER


 router.post('/', async (req,res)=>{
   console.log(req.body)
   const {admin, username, password, name, email, shopBag, sex}= req.body
   const newUser = await new Users({
     name: name,
     admin: admin,
     username: username,
     password: password,
     name: name,
     email:email,
     shopBag: shopBag,
     sex: sex
    })
    const {error} = validateData(req.body)
    console.log(newUser)
    if (error) return res.status(400).send(error.details[0].message)
    try{
      await newUser.save()
      console.log(newUser)
      res.send(newUser)
    }
    catch(err){
      console.log('An error ocurred while creating a new user in the db', err.message)
    }
  })
  
  

module.exports = router