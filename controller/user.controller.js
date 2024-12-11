const User = require("../model/user.model");
const jwt=require("jsonwebtoken")
module.exports.login = async (req, res) => {
    
  const { userName, password } = req.body;
  const user = await User.findOne({ userName: userName });
  console.log(user)
  if (user) {
    
    const auth = password === user.password;
    if (auth) {
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign(
        {
          id: user._id,
          username: user.userName,
          role: user.role
        },
        secret,
        { expiresIn: 60 * 60 * 1000 }
      );
      console.log(token);
      res.cookie("authTocken", token, { httponly: true, expiresIn: "1hr" });
      res.status(200).json({ message: "success", user });
    }
  }else{
    res.send("unauthorised!")
  }
};
