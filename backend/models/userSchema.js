import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import { validate } from "node-cron";


const userSchema=new mongoose.Schema(
    {
        name:{ 
            type:String,
            required:true,
            minLength:[3,"Name must contain atleast 3 charcters"],
            maxLength:[30,"Name cannot exceed 30 charcter"]
        },
        email:{
            type:String,
            required:true,
            validate:[validator.isEmail,"Please provide valid email"]
        },
        phone:{
            type:Number,
            required:true,
        },
        address:{
            type:String,
            required:true,

        },
        niches:{
            firstNiche:String,
            secondNiche:String,
            thirdNiche:String
        },
        password:{
            type:String,
            required:true,
            minLength:[8,"Password must contain atleast 8 charcter"],
            maxLength:[32,"password cannot exceed 32 charcter"],
            select:false
        },
        resume:{
            public_id:String,
            url:String
        },
        coverLetter:{
            type:String
        },
        role:{
            type:String,
            required:true,
            enum:["Job Seeker","Employer"]
        },
        createdAt:{
            type:Date,
            default:Date.now,
        },
    });
// hash the  user password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
  });

//   to compare user entered original password with hashed password
userSchema.methods.comparePassword=async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
    
}


    // cookies jwt token
    userSchema.methods.getJWTToken=function()
    {
        return jwt.sign({id:this._id}, process.env.JWT_SECRET_KEY,{
            expiresIn:process.env.JWT_EXPIRE,
        });
    };






















export const User=mongoose.model("User",userSchema);