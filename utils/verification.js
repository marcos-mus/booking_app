import jwt from "jsonwebtoken";
import Hotel from "../models/Hotel.js";
import User from "../models/User.js";
import Room from "../models/Room.js";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Invalid Token"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) next();
    else
      next(createError(403, "You are not authorized to perform this action"));
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) next();
    else
      next(createError(403, "You are not authorized to perform this action"));
  });
};

export const verifyHotel = async (req, res, next) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findById(id);
    if (hotel) next();
    else next(createError(403, "Hotel Not Found"));
  } catch (error) {
    next(error);
  }
};

export const verifyRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const room = await Room.findById(id);
    if (room) next();
    else next(createError(403, "Room Not Found"));
  } catch (error) {
    next(error);
  }
};

export const verifyIfUserExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user) next();
    else next(createError(403, "User Not Found"));
  } catch (error) {
    next(error);
  }
};
