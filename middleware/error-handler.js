const errorHandlerMiddleware = (err, req, resp, next) => {
  console.log(err);
  return resp.json({
    status: 500,
    msg: "Something went wrong please try again",
  });
};

module.exports = errorHandlerMiddleware;
