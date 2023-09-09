const route = require('express').Router()

const{getCustomer,postCustomer} = require('../Controller/customerController')

route.get('/',getCustomer)
route.post('/',postCustomer)

module.exports = route