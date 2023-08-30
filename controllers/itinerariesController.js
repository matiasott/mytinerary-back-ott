import Itinerary from "../models/itinerary.js";


const itinerariesController = {

    getAllItineraries: async (req, res, next) => {
        try {
            const itineraries = await Itinerary.find().populate({
                path: 'cities',
                select: 'name -_id',

            })
            res.json(itineraries)
        } catch (error) {
            res.status(500).json({ error })
        }

    },
    getOneItinerary: async (req, res, next) => {
        try {
            const itineraryId = req.params.id;
            const itinerary = await Itinerary.findById(itineraryId)
                .populate({
                    path: 'cities',
                    select: 'name -_id'
                });
            if (!itinerary) {
                return res.status(404).json({ error: 'Itinerary not found' });
            }

            res.json(itinerary);
        } catch (error) {
            res.status(500).json({ error });
        }
    },

    // getItinerariesByCityName: async (req, res, next) => {
    //     try {
    //         const cityName = req.params.nameCity;
    //         const itineraries = await Itinerary.find({ 'cities.name': cityName })
    //         .populate({
    //             path: 'cities',
    //             select: 'name -_id',
    //         });
    //         res.json(itineraries);
    //     } catch (error) {
    //         res.status(500).json({ error });
    //     }
    // },
    
    createOneItinerary: async (req, res, next) => {

        try {
            const itinerary = await Itinerary.create(req.body)
            res.status(201).json({ response: itinerary })
        } catch (error) {
            res.status(500).json({ error })
        }

    },

    updateOneItinerary: async (req, res, next) => {
        try {
            const itineraryId = req.params.id;
            const updatedItinerary = await Itinerary.findByIdAndUpdate(itineraryId, req.body, {
                new: true,
                runValidators: true
            });

            if (!updatedItinerary) {
                return res.status(404).json({ error: 'Itinerary not found' });
            }

            res.json({ response: updatedItinerary });
        } catch (error) {
            res.status(500).json({ error });
        }
    },


    deleteOneItinerary: async (req, res, next) => {
        try {
            const itineraryId = req.params.id;
            const deletedItinerary = await Itinerary.findByIdAndDelete(itineraryId);

            if (!deletedItinerary) {
                return res.status(404).json({ error: 'Itinerary not found' });
            }

            res.json({ response: 'Itinerary deleted successfully' });
        } catch (error) {
            res.status(500).json({ error });
        }
    },


}

export default itinerariesController;