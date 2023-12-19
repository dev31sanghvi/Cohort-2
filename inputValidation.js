// old way to do validation

const express = require("express");

const app = express();
app.use(express.json);
app.post("/health-checkup", function (req, res) {
  const kindneys = req.body.kindneys;
  if (!kindneys) {
    res.json[
      {
        msg: "wrong input",
      }
    ];
    return; // early return
  } else {
    // or you can implement logic
  }
  const kidneyLength = kindneys.length;

  res.send("you have " + kidneyLength + "kidneys");
});

app.listen(3000);

//global catches
// here we take 4 inputs
app.use(function (err, req, res, next) {
    errCount++;
  res.json({
    msg: "something is up with my server ! ",
  });
});
