const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

//Define the port
const port = process.env.PORT || 5000;

//Allow CORS
app.use(cors());

//Initialize Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Import Routes
const usersRoute = require("./routes/users");

//Use Routes
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const mongoURI='mongodb://localhost:27017/tours?readPreference=primary&appname=MongoDB%20Compass&ssl=false'

//Database Connection
mongoose.connect(mongoURI,{ useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex:true},()=>{
  console.log("Connected to mongo succesfully")
})

app.listen(port, () => {
  console.log("Server Started on port ", port);
});
