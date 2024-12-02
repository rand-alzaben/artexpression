import express from 'express'
import { addCreator, allCreators, loginAdmin,adminDashboard } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRouter= express.Router()

adminRouter.post('/add-creator',authAdmin,upload.single('image'),addCreator)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-creators',authAdmin,allCreators)
adminRouter.get('/dashboard', authAdmin, adminDashboard)

export default adminRouter