const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log(req.headers.authorization);
  const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
  if (decoded.id && decoded.firstName) {
    next();
  } else {
    res.json({ error: "token invalid" });
  }
};
