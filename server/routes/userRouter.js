import express from "express";
import bcrypt from "bcrypt";
import user from "../models/userModels.js";
import jwt from "jsonwebtoken";

const router= express.Router();
router.post("/",async(req,res)=>{
    try{
        const {email,password,confirmPassword} = req.body;

        // validation

        if(!email || !password || !confirmPassword)
            return res.status(400).json({errorMessage: "please enter all required field"});

        if(password.length < 6)
            return res.status(400).json({errorMessage: "please enter password of at least 6 characters"});
        
        if(password!=confirmPassword)
            return res.status(400).json({errorMessage: "please enter Same Password twice"});

        const existingUser =await user.findOne({email});

        // if(existingUser)
        //     return res.status(400).json({errorMessage: "An account with this email already exists"});

        // hash the password
        const salt= await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        // save a new user acount to database

        const newUser = new user({
            email,passwordHash
        });

        const savedUser= await newUser.save();

        // sign the token
        const token = jwt.sign({
            user: savedUser._id
        }, process.env.JWT_SECRET
        );

        //  sent the token in a http-anly cookie
        res.cookie("token",token.replace,{
            httpOnly:true,
        }).send();


    }catch(err){
        console.error(err);
        res.status(500).send();
    }
});

// login
router.post("/login",async(req,res) =>{
    try{
        const {email,password} = req.body;
        // validate
        if(!email || !password )
            return res.status(400).json({errorMessage: "please enter all required field"});
        
        const existingUser = await user.findOne(({email}));
        if(!existingUser){
            return res.status(401).json({ errorMessage : "wrong email or password ."});
        }
        const passwordCorrect = await bcrypt.compare(
            password,existingUser.passwordHash
        );
        
        if(!passwordCorrect){
            return res.status(401).json({errorMessage: "Wrong email or password"});
        }

        //sign the token
        const token =jwt.sign(
            {
            user:existingUser._id,
            },
            process.env.JWT_SECRET
        );

        res.cookie("token",token,{
            httpOnly: true,
        })
        .send();
        
    
    }catch(err){
        console.error(err);
        res.status(500).send();
    }
});

router.get("/logout",(req,res)=>{
    res.cookie("token", "",{
        httpOnly:true,
        expires: new Date(0)
    }).send();
})

router.get("/loggedIn",(req,res)=>{
    try{
        const token=req.cookies.token;
        if(!token){
            return res.json(false);
        }

        const verified =jwt.verify(token,process.env.JWT_SECRET);
        res.send(true);

    }catch(err){
        console.error(err);
        res.json(false);
    }
})

export default router;
