const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const https = require("https");
const http = require("http");
const fs = require("fs");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const options = {
  key: fs.readFileSync("encryption/geaux-key.pem"),
  cert: fs.readFileSync("encryption/geaux-cert.pem")
};

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(
    uri,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch(err => console.log(err));

const productRouter = require("./routes/products");
const usersRouter = require("./routes/users");

app.use("/product", productRouter);
app.use("/users", usersRouter);
app.get("/", (req, res) => {
  res.send("Geaux Back End");
});

http.createServer(app).listen(port, () => {
  console.log(`HTTP listening on port: ${port}`);
});

https.createServer(options, app).listen(443, () => {
  console.log("HTTPS listening on port: 443");
});
