import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  try {
    // HASH THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // CREATE A NEW USER AND SAVE TO DB
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    console.log(newUser);

    res
      .status(201)
      .json({ status: "success", message: "User created successfully" });
  } catch (err) {
    console.log("err in register");
    console.log(err);
    res.status(500).json({ status: "fail", message: "Failed to create user!" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // CHECK IF THE USER EXISTS
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

    // CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid Credentials!" });

    // GENERATE COOKIE TOKEN AND SEND TO THE USER
    // res.setHeader("Set-Cookie", "test=" + "myValue").json("success")
    const age = 1000 * 60 * 60; // 1 Hour

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure:true,
        maxAge: age,
      })
      .status(200)
      .json({ status: "success", userInfo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to login!" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
