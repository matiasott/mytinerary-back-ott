import { Router } from 'express';
import authController from '../controllers/authController.js';


const authRouter = Router()
const {singUp} = authController

// itinerariesRouter.get('/',)
// itinerariesRouter.get('/nameCity/:nameCity', )
// itinerariesRouter.get('/:id', )


authRouter.post('/', singUp)
// itinerariesRouter.put( '/:id', )
// itinerariesRouter.delete( '/:id', )


export default authRouter