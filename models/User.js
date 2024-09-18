const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
  },
  contact: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
