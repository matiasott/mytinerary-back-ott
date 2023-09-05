import User from "../models/user.js"

const authController = {

    singUp:async(req,res,next)=>{
        try{
            const newUser = await User.create(req.body)
            return res.status(201).json({
                success:true,
                userData:newUser,
                message:'Sign up successfully'
            })

        }catch(error){
            console.log(error);
            next(error)

        }
    }
}


export default authController