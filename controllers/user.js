import User from "../models/User.js";
import {createError} from '../utils/error.js';

export const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) return next(createError(404, "User not found"));
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
