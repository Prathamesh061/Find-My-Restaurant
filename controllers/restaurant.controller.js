const Restaurant = require("../models/restaurant.model");

exports.createRestaurant = async (req, res) => {
  const restaurantObject = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    imageURL: req.body.imageURL,
    location: req.body.location,
    phone: req.body.phone,
    rating: req.body.rating,
  };

  try {
    const restaurant = await Restaurant.create(restaurantObject);

    res.status(200).send(restaurant);
  } catch (err) {
    console.log("Some error happened while creating restaurant", err.message);
    res.status(500).send({
      message: "Some error occurred while creating the Restaurant",
    });
  }
};

exports.getAllRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});

    res.status(200).send({
      restaurants,
      message: "Restaurants fetched successfully.",
    });
  } catch (err) {
    console.log("Some error happened while fetching restaurant", err.message);
    res.status(500).send({
      message: "Some error occurred while fetching the Restaurant",
    });
  }
};
