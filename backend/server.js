import express from 'express'
import mongoose from 'mongoose'
import studentRoutes from './Routes/student.router.js'
import connectDB from './config/db.js';
 import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());               
app.use(express.json());       

// Connect to MongoDB
connectDB();

// API routes
app.use('/api/students', studentRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Student API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
