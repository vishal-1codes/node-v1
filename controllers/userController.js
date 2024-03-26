const User=require('../models/user')

const createUser=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        const user=await User.create({username,email,password})
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({message:error.message})
    }
};


const getUser=async(req,res)=>{
    try{
        const user=await User.find()
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

const deleteUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.deleteOne({_id:id})
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

const putUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const userUpdateData=req.body;
        const user=await User.findOneAndUpdate({_id:id},userUpdateData,{ new: true })
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

module.exports={
    createUser,deleteUser,putUser,getUser
}