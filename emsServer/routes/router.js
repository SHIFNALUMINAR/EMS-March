

// set paths for each requests

const express=require('express')

const upload = require('../multerconfig/storageConf')
const { employeeRegister } = require('../controllers/logic')


// create an object for Router class in express
const router=new express.Router()

// register employee - post
router.post('/employees/register',upload.single('user_profile'),employeeRegister)

// get all employees
router.get('/employees/getEmployees')

// ...


module.exports=router


