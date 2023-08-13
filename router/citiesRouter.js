import { Router } from 'express';
import citiesController from '../controllers/citiesController.js';
const citiesRouter = Router()
const { getAllCities, getOneCity } = citiesController

citiesRouter.get('/', getAllCities)
citiesRouter.get('/detailcity/:name', getOneCity)
// , ()=>{
//     console.log('Soy la funcion que sigue');
// }

export default citiesRouter