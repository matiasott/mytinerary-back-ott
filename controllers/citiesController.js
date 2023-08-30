// import cities from '../cities.js';
import City from '../models/city.js';

const citiesController = {
    getAllCities: async (req, res, next) => {
        let cities;
        let error = null
        let success = true;
        try {
            cities = await City.find()
            
            res.json({
                response: cities,
                success,
                error
            })
        } catch (err) {
            success = false;
            error = err;
            next(err)
        }
    },

    getOneCity: async (req, res, next) => {
        console.log(req.params)
        const { id } = req.params
        const { name } = req.body
        console.log(id);
        let cities;
        let error = null
        let success = true;
        try {
            cities = await City.findById(id)
        } catch (err) {
            console.log(err)
            success = false;
            error = err;
        }

        res.json({
            response: cities,
            success,
            error
        })
    },

    createOneCity: async (req, res, next) => {

        console.log(req.body);
        let city;
        let error = null
        let success = true;
        try {
            
            city = await City.create(req.body)
            console.log(city);
        } catch (err) {
            console.log(err)
            success = false;
            error = err;
        }

        res.json({
            response: city,
            success,
            error
        })
    },

    updateOneCity: async (req, res, next) => {
        const { id } = req.params;
        const updateData = req.body; 
        let error = null;
        let success = true;
    
        try {
            const updatedCity = await City.findByIdAndUpdate(id, updateData, { new: true });
            if (!updatedCity) {
                success = false;
                throw new Error("City not found");
            }
            res.json({
                response: updatedCity,
                success,
                error
            });
        } catch (err) {
            console.log(err);
            success = false;
            error = err;
            res.json({
                response: null,
                success,
                error
            });
        }
    },
    
    deleteCity: async (req, res, next) => {
        const { id } = req.params;
        let error = null;
        let success = true;
    
        try {
            const deletedCity = await City.findByIdAndDelete(id);
            if (!deletedCity) {
                success = false;
                throw new Error("City not found");
            }
            
            res.json({
                response: deletedCity,
                success,
                error
            });
        } catch (err) {
            console.log(err);
            success = false;
            error = err;
            res.json({
                response: null,
                success,
                error
            });
        }
    },

    createManyCities: async (req, res, next) => {
        console.log(req.body);
        let cities = [];
        let error = null;
        let success = true;
        
        try {
            const cityDataArray = req.body.cities;
            const createPromises = cityDataArray.map(cityData => City.create(cityData));
            cities = await Promise.all(createPromises);
    
            console.log(cities);
        } catch (err) {
            console.log(err);
            success = false;
            error = err;
        }
    
        res.json({
            response: cities,
            success,
            error
        });
    },

    // searchCitiesByName: async (req, res, next) => {
    //     const { searchQuery } = req.query;
    //     let cities;
    //     let error = null;
    //     let success = true;

    //     try {
    //         cities = await City.find({ name: { $regex: '^' + searchQuery, $options: 'i' } });

    //         res.json({
    //             response: cities,
    //             success,
    //             error
    //         });
    //     } catch (err) {
    //         console.log(err);
    //         success = false;
    //         error = err;
    //         res.json({
    //             response: null,
    //             success,
    //             error
    //         });
    //     }
    // },

    
}

export default citiesController;