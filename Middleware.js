// easy way to do authentication without using Middlewares .

// ugly way

const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.headers.kidneyId;

  if (username == "dev" && password == "pass") {
    if (kidneyId == 1 || kidneyId == 2) {
      res.json({
        msg: "success!",
      });
    } else {
      res.json({
        msg: "bad input !  ",
      });
    }
  }
  res.status(400).json({ msg: "something up with your inputs" });
});

app.listen(3000);

// better solution --> create wrapper function.

// for ex:-

function usernameValidator(username, password) {
  if (condition) {
    return false / true;
  }
}

function kidneyValidator(kidneyId) {
  if (condition) {
    return false / true;
  }
}

// best solution:- create Middlewares

// const express = require("express");

// const app = express();


// app.get(
//   "/health-checkup",
//   function (req, res, next) {
//     console.log("hello from req-1");
//     next();
//   },
//   function (req, res) {
//     console.log("hello from req-2");
//   }
// );

// app.listen(3000);
