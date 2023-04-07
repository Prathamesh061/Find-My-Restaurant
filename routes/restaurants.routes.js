const { verifyRestaurantReqBody, isNumber } = require("../middlewares");
const restaurantContoller = require("../controllers/restaurant.controller");

module.exports = (app) => {
  app.post(
    "/api/restaurant/add",
    [verifyRestaurantReqBody.verifyRestaurantReqBody],
    restaurantContoller.createRestaurant
  );

  app.get(
    "/api/restaurant/categories/:categoryName",
    restaurantContoller.getAllRestaurantByCategory
  );

  app.get("/api/restaurant", restaurantContoller.getAllRestaurant);

  app.get("/api/restaurant/categories", restaurantContoller.getAllCategories);

  app.get("/api/restaurant/:id", restaurantContoller.getRestaurantById);

  app.get(
    "/api/restaurant/rating/:rating",
    [isNumber.isNumber],
    restaurantContoller.getRestaurantsByRating
  );
};
