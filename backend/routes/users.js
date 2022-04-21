const express = require("express");
const router = express.Router();
const User = require("../models/Usersmodel");

router.get("/", async (req, res) => {
  try {
    const usersList = await User.find();
    res.json(usersList);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    address: req.body.address,
    country: req.body.country,
    gender: req.body.gender,
  });
  try {
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: err });
  }
});


router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const savedUser = await User.findOne({ email: req.body.email});
    console.log(savedUser);
    if(savedUser.password==req.body.password){
      return res.status(200).json(savedUser);
    }

    return res.status(400).json({message:"invalid password"});
    
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.post("/search", async (req, res) => {
  console.log(req.body);
  try {
    const searchUser = await User.find({ email: req.body.email });
    res.json(searchUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/delete", async (req, res) => {
  console.log(req.body);
  try {
    const deleteUser = await User.deleteOne({ email: req.body.email });
    res.json(deleteUser);
    console.log(searchUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/update", async (req, res) => {
  console.log(req.body);
  try {
    const updateUser = await User.updateOne(
      { email: req.body.email },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          country: req.body.country,
          gender: req.body.gender,
        },
      }
    );
    res.json(updateUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
