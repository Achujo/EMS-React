// step-1 set path for each request
const express=require('express')

const upload = require('../multerConfig/storageConf')
const { employeeRegister } = require('../Controllers/logic')


// step-2 after set path then create an object for router class in express
const router=new express.Router()

// step-3 register employees-post
router.post('/employees/register',upload.single('user_profile'),employeeRegister)

// step-4 get all employess 
router.get('/employees/getEmployees')


// export router
module.exports=router