import mongoose from "mongoose";
import validator from "validator";

const ProfileSchema = new mongoose.Schema(
  {
    dob: { type: Date },
    birthTime: { type: String },
    birthPlace: { type: String },
    locationCoords: {
      lat: Number,
      lon: Number,
    },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: ProfileSchema,
      default: {},
    },
    profileCompleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
