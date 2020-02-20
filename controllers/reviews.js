const Reviews = require("../models/reviews");
const router = require("express").Router();

router.get("/", (req, res) => {
  // Respond with all reviews belonging to specific house and populate nested fields
  Reviews.find({ house: req.query.house }).then(response => {
    res.send(response);
  });
});

module.exports = router;
