import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verification.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.json({ message: "You are authenticated" });
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.json({ message: "You are allowed to access this functionality" });
});
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
