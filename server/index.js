import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRouter.js";
import customerRoute from "./routes/customerRouter.js";
import cookieParser from "cookie-parser"
import cors from "cors";
dotenv.config()

// set up server
const app=express();
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3000"],
    credentials: true,
}));

//connect to mongodb
mongoose.connect(process.env.MDB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err) return console.error(err);
    console.log("Database connected")
});


// set up routes
app.use("/auth",userRoute);
app.use("/customer",customerRoute);





