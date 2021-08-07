import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    passwordHash:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})


const user = mongoose.model('user',userSchema);
export default user;