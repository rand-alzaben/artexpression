import express from 'express';
import cors from 'cors';
import 'dotenv/config';  // This line automatically loads your .env file
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import creatorRouter from './routes/creatorRoute.js';
import userRouter from './routes/userRoute.js';

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/admin', adminRouter);
app.use('/api/creator', creatorRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('API WORKING');
});

app.listen(port, () => console.log("Server Started", port));
