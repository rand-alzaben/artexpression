import creatorModel from '../models/creatorModel.js';
import artworkModel from '../models/artworkModel.js';
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary';
import jwt from 'jsonwebtoken'

// API to get all creator list for Frontend
const creatorList = async (req, res) => {
    try {
        const creators = await creatorModel.find({}).select(['-password', '-email']);
        res.json({ success: true, creators });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

// API to upload artwork and save it in the database
const uploadArtwork = async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Debug: Log the body fields
        console.log('Uploaded File:', req.file); // Debug: Log file details

        const { title, description, category, textContent } = req.body;
        const imageFile = req.file;

        // Validate required fields
        if (!title || !description || !category) {
            console.log('Validation Error: Missing required fields');
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Ensure at least an image or text content is provided
        if (!imageFile && !textContent) {
            console.log('Validation Error: Either file or text content is required');
            return res.status(400).json({ success: false, message: "Either image or text content must be provided" });
        }

        let imageUrl = null;
        if (imageFile) {
            try {
                console.log('Uploading image to Cloudinary...');
                const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
                imageUrl = imageUpload.secure_url;
                console.log('Uploaded Image URL:', imageUrl);
            } catch (uploadError) {
                console.error('Error uploading image to Cloudinary:', uploadError);
                return res.status(500).json({ success: false, message: "Error uploading image to Cloudinary" });
            }
        }

        const artworkData = {
            title,
            description,
            category,
            imageUrl,
            textContent,
        };

        try {
            console.log('Saving artwork to database...');
            const newArtwork = new artworkModel(artworkData);
            await newArtwork.save();
            console.log('Artwork Saved:', newArtwork);

            res.status(201).json({ success: true, message: "Artwork uploaded successfully", artwork: newArtwork });
        } catch (dbError) {
            console.error('Error saving artwork to database:', dbError);
            res.status(500).json({ success: false, message: "Error saving artwork to database" });
        }
    } catch (error) {
        console.error('Unexpected Error in uploadArtwork:', error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// API to get all gallery items
const uploadedArtwork = async (req, res) => {
    try {
        // Fetch all artworks from the database
        const artworks = await artworkModel.find();

        if (!artworks || artworks.length === 0) {
            return res.json({ success: true, artworks: [], message: "No artworks found" });
        }

        res.json({ success: true, artworks });
    } catch (error) {
        console.error('Error in uploadedArtwork:', error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// API for creator login
const loginCreator = async (req,res) => {

    try {

        const {email, password} = req.body
        const creator= await creatorModel.findOne({email})

        if (!creator) {
            return res.json({success:false, message:'Invalid credentials'})
        }

        const isMatch = await bcrypt.compare(password,creator.password)

        if (isMatch) {
            
            const token = jwt.sign({id:creator._id}, process.env.JWT_SECRET)

            res.json({success:true, token})
        } else {
            res.json({success:false, message:'Invalid credentials'})
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
    
}




export { creatorList, uploadArtwork, uploadedArtwork, loginCreator };