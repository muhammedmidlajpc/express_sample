const jwt = require("jsonwebtoken");
const athenticate = (req,res,next) => {
  console.log("first")
    console.log("2nd")
    const token = req.cookies.authTocken;

    console.log(token);
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
          res.status(401).json({ message: "unauthorised", error: err.message });
        } else {
          console.log(data);
          req.role = data.role;
          next();
        }
      });
    } else {
      res.status(401).send("Unauthorized!");
    }
};
module.exports = athenticate;
