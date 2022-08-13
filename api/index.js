const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const url = process.env.MONGO_URL

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((res) => { console.log('Connected to MongoDB'); })
.catch((err) => { console.log(err); });

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
})