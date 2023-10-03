const Customer = require('../Model/Customer')

//get
exports.getCustomer = async (req,res)=>{
    try {
        const data = await Customer.find().populate('account');
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//post
exports.postCustomer = async (req,res)=>{
    try {
        const data = await Customer.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//update
exports.updateCustomer = async (req,res)=>{
    try {
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({errors:false,data}) 
    } catch (error) {
       return res.status(400).json({errors:true,message:error.msg}) 
    }
}

//delete
exports.deleteCustomer = async (req,res)=>{
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        return res.json({errors:false,data}) 
    } catch (error) {
       return res.status(400).json({errors:true,message:error.msg}) 
    }
}
