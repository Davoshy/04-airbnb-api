const mongoose = require("mongoose");

module.exports = mongoose.model("types", {
  name: {
    type: String,
    required: [true, "name is required"]
  }
});
