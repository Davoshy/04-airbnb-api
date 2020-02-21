// just for testing

const Users = require("../models/users");
const router = require("express").Router();

router.get("/", (req, res) => {
  Users.find({})
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
