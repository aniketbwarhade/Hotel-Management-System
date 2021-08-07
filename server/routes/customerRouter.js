import express from "express";
const router= express.Router();
import auth from "../middleware/auth.js";
import Customer from "../models/customerModels.js";

router.post("/",auth,async(req,res)=>{
    try{
        const {firstName,lastName,username}=req.body;

        const newCustomer = new Customer({
            firstName,
            lastName,
            username,
        });
        const savedCustomer = await newCustomer.save();
        res.json(savedCustomer);
    }catch(err){
        console.error(err);
        res.status(500).send();
    }
});


router.get("/",auth,async(req,res)=>{
    try{
        const customers = await Customer.find();
        res.json(customers);
    }catch(err){
        console.error(err);
        res.status(500).send();
    }
    
})

export default router;