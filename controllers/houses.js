const Houses = require("../models/houses");
const router = require("express").Router();

router.get("/", (req, res) => {
  Houses.find(req.query)
    .select(
      "images rating bedrooms guests bathroom title price city region type lat lng"
    )
    .populate("type")
    .lean()
    .then(houses => {
      // Set first of images as 'image'
      let array = houses.map(house => {
        house.image = house.images[0];
        delete house.images;
        return house;
      });
      res.send(array);
    })
    .catch(err => {
      res.send(err);
    });
});

// Create route for single house

router.get("/:id", (req, res) => {
  Houses.find({ _id: req.params.id })
    .populate("amenities type host")
    .then(houses => {
      res.send(houses[0]);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
