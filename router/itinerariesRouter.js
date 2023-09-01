import { Router } from 'express';
import itinerariesController from '../controllers/itinerariesController.js';

const itinerariesRouter = Router()

itinerariesRouter.get('/', itinerariesController.getAllItineraries)
itinerariesRouter.get('/nameCity/:nameCity', itinerariesController.getItinerariesByCityName)
itinerariesRouter.get('/:id', itinerariesController.getOneItinerary)


itinerariesRouter.post('/', itinerariesController.createOneItinerary)
itinerariesRouter.put( '/:id', itinerariesController.updateOneItinerary)
itinerariesRouter.delete( '/:id', itinerariesController.deleteOneItinerary)


export default itinerariesRouter