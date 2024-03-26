const mongoose=require('mongoose')

const joblistSchema=new mongoose.Schema({
    postuser:{
        type:String,
        require:true
    },
    jobposition:{
        type:String,
        require:true
    },
    joblocation:{
        type:String,
        require:true
    },
    joblink:{
        type:String,
        require:true
    },
    companyname:{
        type:String,
        require:true
    }

})

module.exports=mongoose.model('Joblist',joblistSchema)