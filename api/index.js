const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

const url = process.env.MONGO_URL

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((res) => { console.log('Connected to MongoDB'); })
.catch((err) => { console.log(err); });

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
})