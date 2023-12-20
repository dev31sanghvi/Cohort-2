// old way to do validation

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());


app.use(express.json);

app.post("/health-checkup", function (req, res) {
  const kindneys = req.body.kindneys;
  const response = schema.safeParse();   // syntax for inpout validation using zod
  if(!response.success){
      res.status(411).json({
        msg:"you input is invalid "
    })
  }else{
      res.send({
          response
        })
    }
    res.send({
        response,
    });
    //   res.send("you have " + kidneyLength + "kidneys");
});

//middleware function
// function middleware(res,req,next){
    // fetch().then((){
        //   next();
        // })
// }

app.listen(3000);

//global catches
// here we take 4 inputs
// app.use(function (err, req, res, next) {
    //     errCount++;
    //   res.json({
        //     msg: "something is up with my server ! ",
        //   });
        // });



//zod gives you detail about each and everything about your data like success,err,expected,undefined,message etc..

// lets validate below contraints:
// {
//     email:string=>email
//     pass: atleast 8 letters
//     country :"in","us"
// }



//syntax for zod
const schema=zod.object({
    email:zod.string();
    password:z.string ();
    coutnry:z.literal("IN").or(z.literal("US"))
})
