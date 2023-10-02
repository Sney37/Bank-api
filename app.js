const express = require('express')
const mongoose = require('mongoose')
const customerRoute = require('./Route/customerRoute')
const accountRoute = require('./Route/accountRoute')
const cors = require('cors')
require('dotenv/config')

const app = express()

app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>{
    console.log('running on 5000 port');
})

app.use('/api/customer',customerRoute)
app.use('/api/account',accountRoute)

app.listen(process.env.PORT)

async function bankdb() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

bankdb()