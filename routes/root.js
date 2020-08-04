//get the express router
const express = require("express");
const app = express.Router();
//show the routes
app.get("/",(req,res) => {
    res.json("Hello World!");
    });


module.exports=app;