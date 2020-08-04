console.log("HI utkarsh");
//this will be server.js

//import express / morgan
const express = require("express");
const morgan = require("morgan");
//create an instance
const app = express();
//define a port
const port=3000; 
//import all the routes
const root = require("./routes/root");
//add middleware - which will reduce a lot of hardwork
app.use(morgan('dev'));
app.use("/", root);
//define routes
app.get("/",(req,res) => {
//console.log(0.1+0.2);
res.json(0.1+0.2);
});
//listen to the port
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});