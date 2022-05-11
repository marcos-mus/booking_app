import express from "express";
import {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotels.js";
import { verifyAdmin, verifyHotel } from "../utils/verification.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyHotel, verifyAdmin, updateHotel);
router.delete("/:id", verifyHotel, verifyAdmin, deleteHotel);
router.get("/:id", getHotel);
router.get("/", getHotels);

export default router;
