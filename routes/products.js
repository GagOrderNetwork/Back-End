const router = require("express").Router();
let Product = require("../models/user.model");

router.route("/").get((req, res) => {
  Product.find()
    .then(users => res.json(users))
    .catch(err => err.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const productName = req.body.productName;
  const productLink = req.body.productLink;
  const company = req.body.company;

  const newProduct = new Product({ productName, productLink, email, company });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
