import  validator from "validator"
import bcrypt from "bcrypt"
import { v2 as cloudinary}from "cloudinary"
import creatorModel from "../models/creatorModel.js"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js"
import artworkModel from "../models/artworkModel.js"

// API for adding creator
const addCreator = async (req,res) => {
    try {

        const {name, email, password, speciality, about, adress  } =req.body
        const imageFile= req.file 
        
// checking for all data to add creator 
if (!name || !email || !password || !speciality || !about || !adress ) {
    return res.json({success:false, message: "Missing Details"})

}

//velidating email format
if(!validator.isEmail(email)) {
    return res.json({success:false, message: "Please enter a valid e-mail"})
    }


    //validating strong password
    if(password.length < 8){
        return res.json({success:false, message: "Please enter a strong password"}  )
    }
  


// hashing creator password 
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)


//upload image to cloudinary
const imageUpload =await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
const imageUrl = imageUpload.secure_url

const creatorData = {
    name,
    email,
    image: imageUrl,
    password: hashedPassword,
    speciality,
    about,
    adress: JSON.parse(adress),
    date:Date.now()
}
 const newCreator = new creatorModel(creatorData)
 await newCreator.save()

 res.json({success: true, message: "Creator added"})

 } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }

}

// API for admin Login
const loginAdmin = async (req,res) => {
    try { 
        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ) {
            const token =jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, token})
        } else {
            res.json({success:false, message: "Invalid credentials"})
        }

    } catch(error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}
//API to get all creators list for admin panel
const allCreators = async (req,res) => {
try {
    
        const creators = await creatorModel.find({}).select('-password')
        res.json({success:true,creators})

} catch (error) {
     console.log(error)
        res.json({success: false, message:error.message})
}

}

//API to get dashboard data for admin panel
const adminDashboard = async (req,res) => {
    try {
        const creators = await creatorModel.find({})
        const users = await userModel.find({})
        const artworks = await artworkModel.find({})

        const dashData = {
            creators: creators.length,
            artworks: artworks.length,
            aesthete: users.length

        }
        res.json({success:true, dashData})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }

}

export{addCreator, loginAdmin, allCreators, adminDashboard}