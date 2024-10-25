import User from "../model/user.model.js";

export const getUsers = async (req, res) => {
    try {
      // Get the ID of the logged-in user from the request object (set by authentication middleware)
      const loggedInUserId = req.user._id;
  
      // Query the User collection to get all users except the logged-in user
      const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
  
      // Send the filtered list of users as a response with a 200 OK status
      res.status(200).json(filteredUsers);
    } catch (error) {
      // Log any errors and return a 500 Internal Server Error response with a generic error message
      console.error("Error in getUsers controller:", error.message);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  };
  