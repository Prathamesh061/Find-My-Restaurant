const { verifyRestaurantReqBody } = require("../middlewares");
const restaurantContoller = require("../controllers/restaurant.controller");
module.exports = (app) => {
  app.post(
    "/api/restaurant/add",
    [verifyRestaurantReqBody.verifyRestaurantReqBody],
    restaurantContoller.createRestaurant
  );
  app.get("/api/restaurant", restaurantContoller.getAllRestaurant);
};
