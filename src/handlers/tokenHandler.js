const tokenDecode = (req) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ")[1];
    if (bearer === "aSuperSecretKey") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

exports.verifyToken = (req, res, next) => {
  const tokenValid = tokenDecode(req);
  if (tokenValid) {
    next();
  } else {
    res.status(401).json("Unauthorized");
  }
};
