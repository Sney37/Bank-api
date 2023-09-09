const Account = require('../Model/Account')

exports.getAccount = async (req,res)=>{
    try {
        const data = await Account.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postAccount = async (req,res)=>{
    try {
        const data = await Account.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}