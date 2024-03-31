import express from 'express';
import connectDB from './db.js'; // Assuming db.js exports a function
import userRouter from './routers/userRouters.js'; // Assuming userRouters.js exports a router
import joblistRouter from './routers/joblistRouters.js';

const app = express();

// Apply CORS middleware before routes
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Include OPTIONS method
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Include Authorization header if needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Parse JSON request body
app.use(express.json());

// Routes
app.use('/api', userRouter);
app.use('/api', joblistRouter);

// Handling OPTIONS requests for preflight
app.options('*', function(req, res) {
    res.sendStatus(200);
});

// Connect to database
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});