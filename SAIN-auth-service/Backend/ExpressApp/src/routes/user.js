const express = require('express')
const passport=require('passport')
const User = require('../models/user')
const router = new express.Router()

router.get ('/', async(req, res) => {
    try {       
        res.status(200);
    } catch (e) {
        res.status(400).send({error:e.message})
    }
})


router.post('/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        console.log(token)
        res.json({token })
    } catch (e) {
        res.status(400).send({error:e.message})
    }

});

router.post('/register',async (req,res)=>{
    
    try {
        //const user = await User.findOne({email:req.body.email})
        var user = await User.findOne({email:req.body.email})
        if (user) {
            throw new Error('Username is already exist')
        }
        user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({token:token})
    } catch (e) {
        res.status(400).send({error:e.message})
    }
})

module.exports = router