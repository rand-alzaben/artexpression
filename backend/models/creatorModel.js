import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    about: { type: String, required: true },
    adress: { type: Object, required: true },
    date: { type: Number, required: true },
    artworks_uploaded: { type: [String], default: [] },
}, { minimize: false })

const creatorModel = mongoose.models.creator || mongoose.model('creator', creatorSchema)


export default creatorModel