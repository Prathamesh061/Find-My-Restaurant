const constants = require("../utils/constants");

exports.verifyRestaurantReqBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }

  if (!req.body.name) {
    res.status(400).send({
      message: "Failed! Restaurant Name is not provided !",
    });
    return;
  }

  if (!req.body.description) {
    res.status(400).send({
      message: "Failed! Description is not provided !",
    });
    return;
  }

  const restaurantCategory = req.body.category;
  const restaurantCategories = [
    constants.restaurantCategory.dineout,
    constants.restaurantCategory.takeout,
  ];
  if (
    restaurantCategory &&
    !restaurantCategories.includes(restaurantCategory)
  ) {
    res.status(400).send({
      message:
        "Category provided is invalid. Possible values DINEOUT | TAKEOUT  ",
    });
    return;
  }

  if (!req.body.imageURL) {
    res.status(400).send({
      message: "Failed! imageURL is not provided !",
    });
    return;
  }

  if (!req.body.location) {
    res.status(400).send({
      message: "Failed! Location is not provided !",
    });
    return;
  }

  if (!req.body.phone) {
    res.status(400).send({
      message: "Failed! Phone number is not provided !",
    });
    return;
  }

  if (!req.body.rating) {
    res.status(400).send({
      message: "Failed! Rating is not provided !",
    });
    return;
  }

  next();
};
