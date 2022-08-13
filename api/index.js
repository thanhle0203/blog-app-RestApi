const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const port = 8081;

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
   res.send("Hey this is main url");
})

app.listen(port, () => {
    console.log("Backend is running on port ${port}");
})