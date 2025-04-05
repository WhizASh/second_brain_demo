import express from "express"
import jwt from "jsonwebtoken"
import cors from "cors"

import { UserModel,TagModel,ContentModel,LinkModel } from "./db";
import { JWT_SECRET, authMiddleware } from "./authMiddleware";
import { random } from "./utils";
import { Document } from "mongoose";

interface User extends Document{
    username:string,
    password:string
}

interface Content extends Document{
    userId:User
}

const app = express();
app.use(express.json())
app.use(cors())

app.post("/api/v1/signup",async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try{
        await UserModel.create({
            username:username,
            password:password
        })

        res.json({
            msg:"User created"
        })
    }
    catch(e){
        res.status(404).json({
            msg:"invalid username or password"
        })
    }
})

app.post("/api/v1/signin",async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

   
        let existuser = await UserModel.findOne({
            username:username,
            password:password
        })

        if(existuser){
            const token = jwt.sign({
                userId:existuser._id
            },JWT_SECRET)

            res.json({
                token:token
            })
        }
        else{
            res.status(403).json({
                message:"Incorrect credentials"
            })
        }
    
})

app.post("/api/v1/content", authMiddleware, async (req, res) => {
    const title = req.body.title;
    const type = req.body.type;
    const link = req.body.link;

        try{
        await ContentModel.create({
            title:title,
            type:type,
            link:link,
            userId:req.userId
        })

        res.json({
            msg:"Content Added"
        })
    }
    catch(e){
        console.log("Content Failed !! ");
        console.log(e);
        res.status(403).json({
            error:e
        })
    }
})

app.get("/api/v1/content", authMiddleware, async (req, res) => {
    
    const content = await ContentModel.find({
        userId:req.userId
    }).populate("userId")

    res.json({
        content
    })
})

app.delete("/api/v1/content",authMiddleware, async (req, res) => {
    const contentId = req.body.contentId

    try{
        await ContentModel.deleteOne({
            _id:contentId,
            userId:req.userId
        })

        res.json({
            msg:"Content deleted"
        })
    }
    catch(e){
        res.status(403).json({
            error:e
        })
    }    
})

app.post("/api/v1/brain/share", authMiddleware, async(req, res) => {
    const share = req.body.share

    if(share){
        const hash = random(10)
        try{
            await LinkModel.create({
                // content:share,
                hash:hash,
                userId:req.userId
            })

            res.json({
                msg:"Link Created",
                link:hash
            })
        }
        catch(e){
            res.status(403).json({
                error:e
            })
        }
    }
    else{
        await LinkModel.deleteOne({
            userId:req.userId
        })

        res.json({
            msg:"Link deleted"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const sharelink = req.params.shareLink;

    try{
        const link = await LinkModel.findOne({
            hash:sharelink
        })

        if(link){

            const content = await ContentModel.findOne({
                userId:link.userId
            }).populate("userId") as Content
            
            if (content){
                res.json({  
                    username:content.userId.username ,
                    content:content
                })
            }
        }
        else{
            res.json({
                msg:"Link is not valid"
            })
        }
    }
    catch(e){
        res.status(403).json({
            error:e
        })
    }
})

app.listen(3000,()=>console.log("server started "))