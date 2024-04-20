import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });


app.use("/api/user",userRoute)

app.listen(3000, () => {
  console.log(`Server Listen at PORT ${3000}`);
});


