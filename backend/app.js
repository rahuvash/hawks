const express= require("express");
const authRoutes=require("./routes/authRoutes")
const cors= require("cors")

const app= express();

//Middeware
app.use(express.json());
app.use(cors())

// Routes
app.use('/auth', authRoutes);

module.exports= app