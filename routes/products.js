const router = require("express").Router();
let Product = require("../models/products.model");

router.route("/").get((req, res) => {
  Product.find()
    .then((users) => res.json(users))
    .catch((err) => err.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userId = req.body.userId;
  const name = req.body.name;
  const link = req.body.link;
  const price = req.body.price;

  const newProduct = new Product({
    name,
    link,
    userId,
    price,
  });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => err.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Excerise deleted"))
    .catch((err) => err.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      product.userId = req.body.userId;
      product.productName = req.body.productName;
      product.productLink = req.body.productLink;
      product.productPrice = req.body.productPrice;

      product
        .save()
        .then(() => res.json("Product updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => err.status(400).json("Error: " + err));
});

module.exports = router;
