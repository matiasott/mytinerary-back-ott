import { Router } from 'express';
import citiesRouter from './citiesRouter.js';
import itinerariesRouter from './itinerariesRouter.js';

const indexRouter = Router()

indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itineraries', itinerariesRouter)

indexRouter.get('/', (request, response, next) => {
    response.send('Bienvenido a mi servidor en /api')
})

export default indexRouter