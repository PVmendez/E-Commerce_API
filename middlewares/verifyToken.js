const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const decoded = jwt.verify(req.body.token, process.env.JWT_SECRET);
  if (decoded.id && decoded.firstName) {
    next();
  } else {
    res.json({ error: "token invalid" });
  }
};
