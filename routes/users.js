//get the express router
const express = require("express");
const app = express.Router();

const users = [
    "Line the basket of your coffee maker with a filter.",
    "Grind coffee beans to medium or medium-fine grind size.k",
    "Bring filtered water to a boil, then let it sit for a minute.",
    "Pour enough water into the filter to wet it completely, and let it drain into your cup or coffee pot",
    " Discard the water",
    "Measure the ground coffee into the wet filter",
    "Pour in enough water to wet the ground beans and drain into your cup or coffee pot"
    "pour in the rest of the water",
    "Serve Hot!"
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
