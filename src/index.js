const express = require("express");
const app = express();
const postRoute = require('../routes/post.route');
const userRoutes = require('../routes/user.route');
require('dotenv').config();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// match GET localhost:4000/
app.get("/", (req, res)=>{
    res.send("Sawasdee");
  });
  app.use("/posts", postRoute);
  app.use('/users', userRoutes);
  
  app.listen(port, () => {
    console.log("App started at port: " + port);
  });
  
  
