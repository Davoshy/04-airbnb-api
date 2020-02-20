const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

require("./amenities");
require("./users");
require("./types");

module.exports = mongoose.model("houses", {
  amenities: [
    {
      type: ObjectId,
      ref: "amenities"
    }
  ],

  plus: {
    type: Boolean,
    default: false
  },
  images: [String],
  title: {
    type: String,
    required: [true, "title is required"]
  },
  description: {
    type: String,
    required: [true, "description is required"]
  },
  type: {
    type: ObjectId,
    ref: "types"
  },
  city: {
    type: String,
    required: [true, "city is required"]
  },
  region: {
    type: String,
    required: [true, "region is required"]
  },
  price: {
    type: Number,
    required: [true, "price is required"]
  },
  guests: {
    type: Number,
    required: [true, "guests is required"]
  },
  bathrooms: {
    type: Number,
    required: [true, "bathrooms is required"]
  },
  bedrooms: {
    type: Number,
    required: [true, "bedrooms is required"]
  },
  rating: Number,
  host: {
    type: ObjectId,
    ref: "users"
  },
  lat: {
    type: Number
  },
  lng: {
    type: Number
  }
});
