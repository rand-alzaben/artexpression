import mongoose from "mongoose";

// Artwork schema
const artworkSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    category: {type: String,required: true},
    imageUrl: {type: String},
    textContent: { type: String },
}, { timestamps: true });

const artworkModel = mongoose.models.artwork || mongoose.model('artwork', artworkSchema)

export default artworkModel