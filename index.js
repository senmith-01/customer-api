const express= require('express');
require('dotenv').config();

const app=express();
app.use(express.json());

const PORT =process.env.SERVER_PORT | 3000;

app.listen(PORT, ()=>{
    console.log(`Server Started and Running on port ${PORT}`)
})