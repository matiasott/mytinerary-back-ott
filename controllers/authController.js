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

            const token = jwt.sign({email:newUser.email, photo:newUser.photo},process.env.PASS_TOKEN,{expiresIn:'1h'})
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
    singIn: async (req, res, next) => {
        let { email: emailBody, password } = req.body;
    
        const userInDB = await User.findOne({ email: emailBody });
    
        if (!userInDB) {
            throw new Error("No user exists with this email");
        }
    
        let passwordValidated = bcrypt.compareSync(password, userInDB.password);
    
        if (!passwordValidated) {
            throw new Error("The email/password is incorrect");
        }
    
        // Incluye todos los campos del modelo User en userData
        const userData = { ...userInDB.toObject() };
    
        // Elimina el campo de la contraseña para no incluirlo en la respuesta
        delete userData.password;
    
        const token = jwt.sign(
            { email: userData.email, photo: userData.photo },
            process.env.PASS_TOKEN,
            { expiresIn: '1h' }
        );
    
        return res.status(200).json({
            success: true,
            userData: userData,
            token: token,
            message: 'Sign in successfully'
        });
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








