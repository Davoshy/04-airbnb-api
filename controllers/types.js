const Types = require("../models/types");
const router = require("express").Router();

router.get("/", (req, res) => {
  // Respond with all types
  Types.find({}).then(response => {
    res.send(response);
  });
});

module.exports = router;
