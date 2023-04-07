const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  imageURL: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },
});

module.exports = model("Restaurant", restaurantSchema);