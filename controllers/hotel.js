import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
  const hotel = new Hotel(req.body);
  try {
    const savedHotel = await hotel.save();
    res.status(201).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res,next) => {
  const { id } = req.params;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
     next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Hotel.findByIdAndDelete(id);
    res.status(200).json({ message: "Hotel deleted" });
  } catch (error) {
     next(error);
  }
};

export const getHotel = async (req, res, next) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      res.status(404).json({ message: "Hotel not found" });
    }
    res.status(200).json(hotel);
  } catch (error) {
     next(error);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
     next(error);
  }
};
