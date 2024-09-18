const express = require("express");
const {
  addNewUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", addNewUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
module.exports = router;
