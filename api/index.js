const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then((res) => { console.log('Connected to MongoDB'); })
.catch((err) => { console.log(err); });

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
})