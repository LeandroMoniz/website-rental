const router = require('express').Router()

const RentController = require('../controllers/RentController')

//middlewares 
const verifyToken = require('../helpers/verify-token')






module.exports = router