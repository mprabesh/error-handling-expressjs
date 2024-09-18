const User = require("../models/User");
const asyncWrapper = require("../utils/asyncWrapper");
const AppError = require("../AppError");

const addNewUser = asyncWrapper(async (req, res) => {
  const { name, age, address, contact } = req.body;
  await User.create({ name, age, address, contact });
  res.json("User Created");
});

const getUsers = asyncWrapper(async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const getUser = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById({ _id: id });
  res.json(user);
});
const deleteUser = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  try {
    await User.deleteOne({ _id: id });
    res.json("Deleted");
  } catch (e) {
    console.log(e);
  }
});
const updateUser = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const user = await User.updateOne({ _id: id }, { age: data.age });
    res.json(user);
  } catch (e) {}
});
module.exports = { addNewUser, getUsers, getUser, deleteUser, updateUser };
