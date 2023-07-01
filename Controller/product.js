const getAllProductStatic = async (req, resp) => {
  resp.status(200).json({
    msg: "products testing routes",
  });
};

const getAllProducts = async (req, resp) => {
  resp.status(200).json({
    msg: "products routes",
  });
};

module.exports = { getAllProductStatic, getAllProducts };
