const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from the backend'
    })
})

app.use('/api', studentRoutes);

module.exports = app;