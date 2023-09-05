import { Schema, model } from "mongoose";

const userSchema = Schema({
    email:{type:String, required:true},
    password:{ type: String, required: true },
    name: { type: String, required: true },
    lastName:{ type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    photo: { type: String, default: "https://www.pngmart.com/files/22/User-Avatar-Profile-Transparent-Isolated-PNG.png"},
    birthDate:{ type: Date},
    age:{ type: Number },
    phone:{ type: Number },
    verified:{ type: Boolean,default:false },
}, {
    timestamps: true
})




const User = model('user', userSchema)

export default User