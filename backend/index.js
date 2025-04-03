import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// API Route
app.get('/', (req, res) => {
    res.send('Welcome to the Alumni Portal API!');
});
app.get('/api/alumni', (req, res) => {
    const alumni = [
        { id: 1, name: "John Doe", batch: "2020", profession: "Software Engineer" },
        { id: 2, name: "Jane Smith", batch: "2019", profession: "Data Scientist" },
    ];
    res.json(alumni);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
