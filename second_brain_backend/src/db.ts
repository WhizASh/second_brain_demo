import mongoose, { Schema, mongo } from "mongoose";

mongoose.connect("mongodb+srv://admin:admin%40123@firstone.ys7b7.mongodb.net/Brains")

const Usermodel = new mongoose.Schema({
    username:{type:String,unique:true,required:true},
    password:{type:String,required:true}
})

const Tagmodel = new mongoose.Schema({
    title:{type:String,unique:true,required:true}
})

const Contentmodel = new mongoose.Schema({
    link:{type:String},
    type:{type:String,enum:["image","video","article","audio","todo","tweet"],required:true},
    title:{type: String, required: true },
    tags:[{type:mongoose.Types.ObjectId,ref:"Tag"}],
    userId:{type:mongoose.Types.ObjectId,ref:"User"}
})

const Link = new mongoose.Schema({
    // content:{type:Schema.Types.Mixed},
    hash:{type:String,unique:true},
    userId:{type:mongoose.Types.ObjectId,ref:"User",required:true}
})

export const UserModel = mongoose.model("User",Usermodel)
export const TagModel = mongoose.model("Tag",Tagmodel)
export const ContentModel = mongoose.model("Content",Contentmodel)
export const LinkModel = mongoose.model("Link",Link)