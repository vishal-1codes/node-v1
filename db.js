const mongoose=require('mongoose')
const uri = process.env.MONGODB_CONNECT_URL || 'mongodb+srv://vishalpawar:tDvvhVIy8i225xKn@own-data.unin18g.mongodb.net/?retryWrites=true&w=majority&appName=own-data';
const connectDB=async()=>{
    try{
        await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MD connected");
    } catch(error){
        console.error("get error in connection",error)
        process.exit(1);
    }
}

module.exports =connectDB;