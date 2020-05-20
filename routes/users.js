const express = require('express')

const { Users , validateData } = require('../models/users')

const router = express.Router()


//GET ALL
router.get('/', async (req, res)=>{
  const users = await Users.find()
  console.log(users)
  res.send(users)
})


//GET ONE

router.get('/:id', async (req, res)=>{
  try{
    const user = await Users.findById(req.params.id)
    res.send(user)
  }
  catch(err){
    console.log(err.message)
  }
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
  
  //UPDATE ONE

router.put('/:id', async (req, res)=>{ 
  const {error}=validateData(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  try{
    await Users.findByIdAndUpdate(req.params.id, req.body)
  }
  catch(err){
    console.log(err.message)
  }
  })

  router.delete('/:id', async (req, res)=>{
    try{
      await Users.findByIdAndDelete(req.params.id)
      res.send('User deleted: ' + req.body.username)
    }
    catch(err){
      console.log(err.message)
    }
    
  })




module.exports = router