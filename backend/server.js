import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import resumeRoutes from './routes/resumeRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { protect } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();

// -------------------- MIDDLEWARE --------------------
app.use(cors({ origin: '*' }));            // Allow all origins
app.use(express.json({ limit: '2mb' }));  // Parse JSON requests
app.use(morgan('dev'));                    // HTTP request logger

// -------------------- ROUTES --------------------
app.use('/api/auth', authRoutes);         // Auth routes
app.use('/api/resumes', resumeRoutes);    // Resume routes (protected internally if needed)

// Test protected route
app.get('/api/protected', protect, (req, res) => {
  res.json({ message: `Hello ${req.user.name}, you are authorized!` });
});

// Health check
app.get('/', (_req, res) => {
  res.send({ status: 'ok', message: 'Resume Generator API' });
});

// -------------------- DATABASE --------------------
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/resume_generator';
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

// -------------------- SERVER --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
