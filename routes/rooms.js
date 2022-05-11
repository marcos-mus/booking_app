import express from "express";
import {
  createRoom,
  updateRoom,
  getRoom,
  getRooms,
  deleteRoom,
} from "../controllers/room.js";
import { verifyAdmin, verifyHotel, verifyRoom } from "../utils/verification.js";

const router = express.Router();

router.post("/:id", verifyHotel, verifyAdmin, createRoom);
router.put("/:id", verifyRoom, verifyAdmin, updateRoom);
router.delete("/:id/:hotelId", verifyRoom, verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getRooms);

export default router;
