const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const productRouter = require("./routes/products");
const usersRouter = require("./routes/users");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log("uri", uri);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch((err) => console.log(err));

app.use("/product", productRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Geaux Back End");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
