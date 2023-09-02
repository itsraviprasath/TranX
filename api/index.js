require("dotenv").config(); // import dotenv
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cokieParser = require("cookie-parser");
const app = express(); // create express app
const connectDb = require("./db/db"); // import db connection
const userRoute = require("./routes/userRoute");
const burrowRoute = require("./routes/burrowRoute");

connectDb(); // connect to db


//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cokieParser());

app.use(express.json()); // parse json bodies
app.use(express.urlencoded({ extended: true })); // parse urlencoded bodies

//routes
app.use("/api/users", userRoute);
app.use("/api",burrowRoute)



const PORT = process.env.PORT || 3000; // port number
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // start server
