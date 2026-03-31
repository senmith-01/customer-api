const express = require('express');
require('dotenv').config();
const customerRoutes = require('./routes/customerRoutes');


const app = express();
app.use(express.json());
app.use('/api/v1/customers', customerRoutes);

const PORT = process.env.SERVER_PORT | 3000;

app.get('/', (req, resp) => {
    resp.status(200).json({ "message": "Connected..." })
})

app.listen(PORT, () => {
    console.log(`Server Started and Running on port ${PORT}`)
})