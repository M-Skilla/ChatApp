import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token provided" });
    }

    const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedJwt) {
      res.status(401).json({ error: "Unauthorized, Invalid Token " });
    }

    const user = await User.findById(decodedJwt.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found " });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in secure route middleware:\n ", error.message);
    res.status(500).json({ error: "Internal server error " });
  }
};

export default secureRoute;
