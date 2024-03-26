const Joblist=require('../models/joblist')

const createJoblist=async(req,res)=>{
    try{
        const {postuser,jobposition,joblocation,joblink,companyname}=req.body;
        const joblist=await Joblist.create({postuser,jobposition,joblocation,joblink,companyname})
        res.status(201).json(joblist)
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

const getJoblist=async(req,res)=>{
    try{
        const joblist=await Joblist.find()
        res.status(201).json(joblist)
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

const deleteJoblist=async(req,res)=>{
    try{
        const {id}=req.params;
        const joblist=await Joblist.findByIdAndDelete({_id:id})
        res.status(201).json(joblist)
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

const updateJoblist=async(req,res)=>{
    try{
        const {id}=req.params;
        const joblistUpdateDate=req.body
        const joblist=await Joblist.findByIdAndUpdate({_id:id},joblistUpdateDate,{ new: true })
        res.status(201).json(joblist)
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

module.exports={
    createJoblist,getJoblist,deleteJoblist,updateJoblist
}