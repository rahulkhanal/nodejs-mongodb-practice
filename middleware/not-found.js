const notFound = (req, resp) => {
  return resp.json({
    status: 404,
    msg: "Route doesnt exist",
  });
};

module.exports = notFound;
