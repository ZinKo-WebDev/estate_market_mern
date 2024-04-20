import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const app=express();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDB connected")
}).catch((error) =>{
    console.log(error);
} )
const PORT=3033;






app.listen(PORT,() => {
    console.log(`Server Listen at PORT ${PORT}`)
})