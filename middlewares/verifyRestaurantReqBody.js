exports.verifyRestaurantReqBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    res.send({
      message: "Content cannot be empty",
    });
    return;
  }
  next();
};
