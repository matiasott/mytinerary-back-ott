import passport from "passport";
import { Strategy,ExtractJwt } from "passport-jwt";
import User from "../models/user.js";

const opt ={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.PASS_TOKEN
}

const fn = async(playload, next)=>{
    try{
        const user = await User.findOne({email:playload.email})
        if(!user){
            throw new Error("No user exists with this email")
        }
        next(null, user)
    }catch(error){
        next(error, null)
    }
}

export default passport.use(new Strategy (opt, fn))
