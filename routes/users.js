import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verification.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.json({ message: "You are authenticated" });
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.json({ message: "You are allowed to access this functionality" });
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.json({ message: "You are allowed to access this functionality" });
// });

router.get("/", verifyAdmin, getUsers);
router.get("/:id", verifyUser, getUser);
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);

export default router;
