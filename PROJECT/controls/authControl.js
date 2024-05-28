import express from "express";
import User from '../models/Users.js';
import authjoi from "../validation/authJOI.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

export const SignIn = async (req, res, next) => {
  try {
    const validUser = await authjoi.validateAsync(req.body);
    const hashedPassword = bcrypt.hashSync(validUser.password, 10);

    const newUser = new User({
      username: validUser.username,
      email: validUser.email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    next(error);
  }
}

export const LogIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const signInData = await User.findOne({ email });

    if (!signInData) {
      return res.status(404).json({ message: "Invalid email" });
    }

    const validPassword = bcrypt.compareSync(password, signInData.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    next(error);
  }
}

export default app;
