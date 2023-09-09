const route = require('express').Router()

const{getAccount,postAccount} = require('../Controller/accountController')

route.get('/',getAccount)
route.post('/',postAccount)

module.exports = route