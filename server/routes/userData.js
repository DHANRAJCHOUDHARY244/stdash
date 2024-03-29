const router=require('express').Router()
const userControllers=require('../controllers/userData.js')
const verifyToken=require('../utils/verifyToken.js')
router.post('/userData',verifyToken,userControllers.getUserData)

module.exports=router