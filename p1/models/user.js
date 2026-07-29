const mongoose = require("mongoose");
// Schema
const userSchema = new mongoose.Schema({
  first: {
    type: String,
  },
  last: {
    type: String,
  },
  email: {
    type: String,
  },
});

// Model
const User = mongoose.model("user1", userSchema);

module.exports = User;