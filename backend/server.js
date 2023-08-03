const app= require("./app")
const dotenv= require("dotenv")
const main = require("./config/db")


//Dot Env Path 
dotenv.config({path:"backend/config/config.env"});

//Connect with mongodb atlas
main()


app.listen(process.env.PORT,()=>{
    console.log(`port is running at http://localhost:${process.env.PORT}`)
})