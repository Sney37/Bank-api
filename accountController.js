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


//updateData
exports.updateAccount = async (req,res)=>{
    try {
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({errors:false,data}) 
    } catch (error) {
       return res.status(400).json({errors:true,message:error.msg}) 
    }
}

//deleteDta
exports.deleteAccount = async (req,res)=>{
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        return res.json({errors:false,data}) 
    } catch (error) {
       return res.status(400).json({errors:true,message:error.msg}) 
    }
}
