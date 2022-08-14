const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

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
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
})