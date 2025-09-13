const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Define a simple schema and model
const ProdukSchema = new mongoose.Schema({
    name: String, 
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const CategorySchema = new mongoose.Schema({
    name: String, 
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const Produk = mongoose.model('Produk', ProdukSchema, 'Produk');
const Category = mongoose.model('Category', CategorySchema, 'Category');

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('MongoDB connected');

        // Fetch all items from the database
        const items = await Produk.find();
        const Categories = await Category.find()
        
        // Log the fetched items to the terminal
        console.log('Items in the database:');
        console.log(items,Categories);
    })
    .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.get('/api/Produk', async (req, res) => {
    try {
        const items = await Produk.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/Category', async (req, res) => {
    try {
        const items = await Category.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/Category', async (req, res) => {
    const newItem = new Category({
        name: req.body.name
    });
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.post('/api/Produk', async (req, res) => {
    const newItem = new Produk({
        name: req.body.name
    });
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});