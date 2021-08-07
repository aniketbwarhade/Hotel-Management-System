import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        min:6,
        max:15
    },

    date:{
        type:Date,
        default:Date.now
    }
});

const customer = mongoose.model("customer",customerSchema);

export default customer;

