import colors from 'colors';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import messages from './routes/messages.js';

const PORT = process.env.PORT || 8000;
const MONGO_CONN = process.env.MONGO_URL;

const app = express();

// Enable CORS for all origins
app.use(cors({ origin: 'http://localhost:8877' }));

// Body parser middleware
app.use(express.json()); // to handle submit raw json
app.use(express.urlencoded({ extended: false })); // to handle submit x-www-form-urlencoded

// Connect to MongDB and run server
const startServer = async () => {
    try {
        await mongoose.connect(MONGO_CONN);
        console.log('\nSuccessfully connected to database!'.green);
        app.listen(PORT, () =>
            console.log(`Server is running on port ${PORT}!\n`.green)
        );
    } catch (err) {
        console.error(err.red);
    }
};

// Routes
app.use('/', messages);

startServer();
