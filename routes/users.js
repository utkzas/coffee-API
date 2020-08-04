//get the express router
const express = require("express");
const app = express.Router();

const users = [
    "Utkarsh Sharma",
    "Vipul Kaushik",
    "Gourang Vyas",
    "Yajur Tuteja",
    "Sameer Chandanani",
    "Sanidhay Grover",
    "Rajat Gupta"
];
app.use(express.json());

app.get("/",(req,res)=> {
    res.json(users);
});
app.post("/", (req, res) => {
    if (!req.body.name) {
      res.json(users.push(req.body.name));
    } else {
      res.status(400).json("You need to have name parameter in body.");
    }
  });
  app.get("/:id",(req, res) => {
      const id= req.params.id;
    if (!!users[id]) {
      res.json(users[id]);
    } else {
      res.status(400).json("User not found");
    }
  });
module.exports = app;