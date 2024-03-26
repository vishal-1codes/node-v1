import express from 'express';
import connectDB from './db.js'; // Assuming db.js exports a function
import userRouter from './routers/userRouters.js'; // Assuming userRouters.js exports a router
import joblistRouter from './routers/joblistRouters.js';

const app = express();


connectDB();

app.use(express.json());

app.use('/api', userRouter,joblistRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});