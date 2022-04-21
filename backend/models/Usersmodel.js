const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique:true,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { collection: "UserDetails" }
);

module.exports = mongoose.model("Users", UsersSchema);
