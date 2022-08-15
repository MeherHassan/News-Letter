const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(bodyParser.urlencoded({extended:true}));







app.listen(3000,function(){
  console.log("3000 server working");
})
