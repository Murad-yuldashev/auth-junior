import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

// Load environment variables
dotenv.config();

const app = express();

// Basic middleware setup
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', authRoutes);

const uri: string | undefined = process.env.MONGODB_URI;
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
if (isNaN(port)) {
    console.error('Invalid PORT environment variable. Must be a number.');
    process.exit(1);
}

if(!uri) {
    console.error('MONGODB_URI is not defined in environment variables');
    process.exit(1);
}

// Database connection
async function startServer(): Promise<void> {
    try {
        await mongoose.connect(uri!);
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        });
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.log('Failed to connect to MongoDB', msg);
        process.exit(1);
    }
}

startServer().catch(err => {
    console.error('Unexpected error starting server:', err);
    process.exit(1);
});



