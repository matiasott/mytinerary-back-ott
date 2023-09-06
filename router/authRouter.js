import { Router } from 'express';
import authController from '../controllers/authController.js';
import { emailExist } from '../middlewares/emailExists.js';
import passport from '../middlewares/passport.js';
import validator from '../middlewares/validator.js'
import { signInSchema } from '../validators/singInValidator.js';
import { signUpSchema } from '../validators/singUpValidator.js';


const authRouter = Router()
const {singUp, singIn,loginWithToken} = authController

authRouter.get('/',validator(signInSchema), singIn)
authRouter.post('/',validator(signUpSchema),emailExist, singUp)
authRouter.get('/token',passport.authenticate('jwt',{session:false}),loginWithToken)

export default authRouter