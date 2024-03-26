import express from 'express';
import connectDB from './db.js'; // Assuming db.js exports a function
import userRouter from './routers/userRouters.js'; // Assuming userRouters.js exports a router
import joblistRouter from './routers/joblistRouters.js';

const app = express();


connectDB();

app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api', userRouter,joblistRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});