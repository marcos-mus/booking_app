import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Users Endpoint" });
});

export default router;
