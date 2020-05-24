const express = require('express')
const { Clothes, validateData } = require('../models/clothes')

const router = express.Router()

// GET ALL

router.get('/', async (req, res)=>{
  try{
    const clothes = await Clothes.find()
    res.send(clothes)
  }
  catch(err){
    console.log(err.message)
  }
})

//GET ALL BY CATEGORY

router.get('/category', async (req, res)=>{
  try{
    const categoryClothes = await Clothes.find(
      {type:req.query.type })
      res.send(categoryClothes)
  }
  catch(err){
    console.log(err.message)
  }
})


//GET ALL BY SEX

router.get('/genre', async (req, res)=>{
  try{
    const queryUnisex = await Clothes
    const sexQueryClothes = await Clothes.find(
      { $or:
        [{sex: req.query.sex},
        {sex:'unisex'}]
      })
      res.send(sexQueryClothes)
  }
  catch(err){
    console.log(err.message)
  }
})

//GET ONE

router.get('/:id', async (req,res)=>{
  try{
    const clothe = await Clothes.findById(req.params.id)
    res.send(clothe)
  }
  catch(err){
    console.log(err.message)
  }
})



//CREATE

router.post('/', async (req, res)=>{
  const {price, name, size, picture, type, footsize, sex}= req.body
  const newClothe = await new Clothes({
    price: price,
    name: name,
    size: size,
    picture: picture,
    type: type,
    footsize: footsize,
    sex: sex
  })
  const {error} = validateData(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try{
    newClothe.save()
    res.send(newClothe)
    console.log(newClothe)
  }
  catch(err){
    console.log(err.message)
  }
})

//UPDATE

router.put('/:id', async (req, res)=>{
  const {error} = validateData(req.body)
  
  if (error) return res.status(400).send(error.details[0].message)
    try{
    await Clothes.findByIdAndUpdate(req.params.id, req.body)
    res.send('Updated!')
  }
  catch(err){
    console.log(err.message)
  }
  })

//DELETE

router.delete('/:id', async (req, res)=>{
  try{
    await Clothes.findByIdAndDelete(req.params.id)
    res.send('Deleted item with id: ' + req.params.id + ' and name: ' + req.body.name)
  }
  catch(err){
    console.log(err.message)
  }
})


module.exports = router