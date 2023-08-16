import { Schema, model } from "mongoose";

const citySchema = Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    language: { type: String, required: true },
    currency: { type: String, required: true },
    population: { type: Number, required: true },
    description: { type: String, required: true },
    area: { type: Number, required: true },
    coordinates: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    image: { type: String, required: true }
}, {
    timestamps: true
});



const City = model('city', citySchema)

export default City