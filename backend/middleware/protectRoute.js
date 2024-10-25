import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).json({
        error: "Unauthorized - no token provided",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      res.status(401).json({
        error: "Unauthorized - Invalid Token",
      });
    }

    const user = await User.findById(decode.userId).select("-password");

    req.user = user;

    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export default protectRoute;