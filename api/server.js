const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Room = require("./models/roomListModels");
const bodyParser = require("body-parser");
const db = mongoose.connection;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/Roomdb");

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log(`App connected to: ${db.name}`);
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

let routes = require("./routes/roomListRoutes");
routes(app);

app.listen(port);
console.log(`this application started on Port: ${port}`);
