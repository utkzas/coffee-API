console.log("HI utkarsh");
//this will be server.js

//import express
const express = require("express");
//create an instance
const app = express();
//define a port
const port=3000; 
//define routes
app.get("/",(req,res) => {
console.log(0.1+0.2);
res.json(0.1+0.2);
});
//listen to the port
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});