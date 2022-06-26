const { Router } = require('express')
const router = Router()
const userControllers = require('../controllers/userControllers')


router.post ('/signup', userControllers.newsletter )

module.exports=router
