import express from 'express';
import { creatorList, uploadArtwork, uploadedArtwork, loginCreator } from '../controllers/creatorController.js';
import upload from '../middlewares/multer.js'

const creatorRouter = express.Router();



// Get list of creators
creatorRouter.get('/list', creatorList);

// Route to upload artwork
creatorRouter.post('/upload-artwork', upload.single('file'), uploadArtwork);

// Route to get artworks
creatorRouter.get('/uploaded-artworks', uploadedArtwork);
//Route for creators login
creatorRouter.post('/login', loginCreator)
export default creatorRouter;