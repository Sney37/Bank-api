const Customer = require('../Model/Customer')

exports.getCustomer = async (req,res)=>{
    try {
        const data = await Customer.find().populate('account');
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postCustomer = async (req,res)=>{
    try {
        const data = await Customer.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}