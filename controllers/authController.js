import User from "../models/user.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'

const authController = {

    singUp:async(req,res,next)=>{
        try{

            const passwordHash = bcrypt.hashSync(req.body.password,10)
            let body = { ...req.body}
            body.password = passwordHash
            const newUser = await User.create(body)

            const token = jwt.sing({email:newUser.email, photo:newUser.photo},process.env.PASS_TOKEN,{expiresIn:'1h'})
            return res.status(201).json({
                success:true,
                userData:newUser,
                token:token,
                message:'Sign up successfully'
            })

        }catch(error){
            console.log(error);
            next(error)

        }
    },
    singIn:async(req,res,next)=>{
        let { email:emailBody,password} =  req.body

        const userInDB = await User.findOne({email:emailBody})

        if(!userInDB){
            throw new Error("No user exists with this email")
        }

        let passwordValidated = bcrypt.compareSync(password,userInDB.password)

        if(!passwordValidated){
            throw new Error("The email/password is incorrect")
        }

        let {email,photo,age}=userInDB
        const token = jwt.sing({email, photo},process.env.PASS_TOKEN,{expiresIn:'1h'})
        return res.status(200).json({
            success:true,
            userData:{email,photo,age},
            token:token,
            message:'Sign in successfully'
        })
    },
    loginWithToken:(req,res)=>{
        const{email,photo,name}=req.user
        res.status(200).json({
            success:true,
            userData:{email,photo,name},
            message:'Sign in successfully'
        })
    }
}


export default authController