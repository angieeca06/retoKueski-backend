const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

//Connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log('connected to db'));

// Middleware
app.use(express.json());

// Route Middlewares
app.use(('/api/user'), authRoute);
app.use(('/api/post'), postRoute);

app.listen(5000, () => console.log('Server is up and running'));