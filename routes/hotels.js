import express from "express";
import {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
  countByCity,
  countByType,
} from "../controllers/hotel.js";
import { verifyAdmin, verifyHotel } from "../utils/verification.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyHotel, verifyAdmin, updateHotel);
router.delete("/:id", verifyHotel, verifyAdmin, deleteHotel);
router.get("/find/:id", getHotel);
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
