//establishing the connection with the server i.e... mongodb
const express = require('express');
const app =express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config(); 
//establishing the authotication with the server i.e... mongodb
mongoose.connect(
    process.env.MONGO_URL
    )//giving a then and catch log whether to say the connection established or not....
    .then(() =>console.log("DBConnection succesfull")).catch((err) => {console.log(err)});
    //establishing a api to alert the user whether the commit made is successfull or not...
    app.get("/api/test",()=>{
        console.log("test is successful")    
    });
app.listen(process.env.PORT || 5000, ()=>{
    console.log('Backend server is running');
});