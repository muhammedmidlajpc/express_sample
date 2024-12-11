const checkRole = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.role)) {
      next();
    } else {
      res.json({ message: "access denide!" });
    }
  };
};
module.exports = checkRole;
