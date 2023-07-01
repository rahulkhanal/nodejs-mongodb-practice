const notFound = (req, resp) => {
  console.log(err);
  return resp.json({
    status: 404,
    msg: "Route doesnt exist",
  });
};

module.exports = notFound;
