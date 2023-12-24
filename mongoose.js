const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect("your_mongo_url");

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  // should check in the database
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);




//------mongoDB-----//
const mongoose = require("mongoose");

mongoose.connect = "URL";

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const mail = req.body.mail;

  //checking if user exists or not
  const existingUser =  User.findOne({ email: username });
  if (existingUser) {
    return res.status(400).send("Username already exists");
  } else {
    const user = new User({
      name: "Dev Sanghvi",
      email: "dev@gmail.com",
      password: "dev11",
    });
  }

  User.save();

  res.json({
    "msg":"user created successfully ! "
  })
});

