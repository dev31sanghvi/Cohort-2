const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

//users array
const ALL_USERS = [
  {
    username: "Dev@gmail.com",
    password: "123",
    name: "Dev ",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

//this function will check for valid users if yes then it will register and if no then it wont register.
function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array

  // bydefault it is false
  const userExists = false;

  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username == username &&
      ALL_USERS[i].password == password
    ) {
      userExists = true;
    }
  }
  return userExists;
}

// post request
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  // this "shhh" is long string for token
  var token = jwt.sign({ username: username }, "jwtPassword");
  return res.json({
    token,
  });
});

//post request
app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }

  res.json
});

app.listen(3000);

//continue after the break !
