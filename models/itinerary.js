import mongoose from "mongoose";

const { Schema, model } = mongoose;

const itinerarySchema = Schema({
    imageAutor: { type: String, required: true },
    nameAutor: { type: String, required: true },
    price: { type: Number, required: true },
    tag: { type: String, required: true },
    cities : [ { type: mongoose.Types.ObjectId, ref: 'city' } ],
    like:{ type: Number },
    duration:{ type: Number,required: true },
}, {
    timestamps: true
})

const Inventary = model('intinerary', itinerarySchema)

export default Inventary