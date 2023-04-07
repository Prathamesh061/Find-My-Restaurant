exports.isNumber = (req, res, next) => {
  if (isNaN(+req.params.rating)) {
    res.status(400).send({
      message:
        "Sorry, we could not process your input. Please enter a valid number.",
    });
    return;
  }
  next();
};
