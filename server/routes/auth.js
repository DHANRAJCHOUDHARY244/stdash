const router=require('express').Router()
const authControllers=require('../controllers/auth.js')

router.post('/login',authControllers.login)
router.post('/reg',authControllers.register)

module.exports=router