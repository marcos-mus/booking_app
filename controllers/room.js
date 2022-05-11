import Room from "../models/room.js";
import Hotel from "../models/hotel.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(201).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Room.findByIdAndDelete(id);
    res.status(200).json({ message: "Room deleted" });
  } catch (error) {
    next(error);
  }
};

export const getRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const room = await Room.findById(id);
    if (!room) {
      res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};
