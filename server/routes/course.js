const router=require('express').Router()
const CourseControllers=require('../controllers/course.js')
const verifyToken=require('../utils/verifyToken.js')

router.get('/course',verifyToken,CourseControllers.getAllCourses)

module.exports=router
