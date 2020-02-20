const Houses = require("../models/houses");
const router = require("express").Router();

router.get("/", (req, res) => {
  Houses.find(req.query)
    .then(houses => {
      // Set first of images as 'image'
      res.send(houses);
    })
    .catch(err => {
      res.send(err);
    });
});

// Create route for single house

module.exports = router;
