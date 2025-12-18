import User from "../models/user.model.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select(
      "profile profileCompleted email name"
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};

export const saveProfile = async (req, res) => {
  try {
    const { dob, birthTime, birthPlace, locationCoords } = req.body;

    const updated = await User.findByIdAndUpdate(
      req.userId,
      {
        name: req.body.name,
        profile: { dob, birthTime, birthPlace, locationCoords },
        profileCompleted: true,
      },
      { new: true }
    ).select("profile profileCompleted email name");

    res.status(200).json(updated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to save profile" });
  }
};
