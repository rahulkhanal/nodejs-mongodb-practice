const notFound = (req, resp) => {
  return resp.json({
    status: 400,
    msg: "Route doesnt exist",
  });
};

module.exports = notFound;
