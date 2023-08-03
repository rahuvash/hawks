const mongoose=require("mongoose")

const main=()=>{

    mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            
        })
        .then((data)=>{
            console.log(`mongodb has been connected ${data.connection.host}`)
        })
    
}

module.exports=main