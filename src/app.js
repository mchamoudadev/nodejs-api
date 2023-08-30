import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import customError from './util/customError.js';
const app = express();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(cookieParser());



// ...

// Rate limiting middleware
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP. Please try again after 15 minutes.'
});

// Apply rate limiter to all routes
app.use(apiLimiter);

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


// Catch 404 errors and forward to error handling middleware
app.use((req, res, next) => {
    next(customError(404, 'Resource not found'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(status).send({ error: message });
});

const PORT = process.env.PORT || 3000;
// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
