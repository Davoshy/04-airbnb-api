const mongoose = require("mongoose");

module.exports = mongoose.model("users", {
  name: {
    type: String,
    required: [true, "name is required"]
  },
  email: {
    type: String,
    required: [true, "email is required"]
  },
  avatar: {
    type: String
  },
  location: {
    type: String
  },
  password: {
    type: String,
    required: [true, "password is required"]
  }
});
