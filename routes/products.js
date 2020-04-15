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

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => err.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Excerise deleted"))
    .catch(err => err.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.email = req.body.email;
      product.productName = req.body.productName;
      product.productLink = req.body.productLink;
      product.company = req.body.company;

      product
        .save()
        .then(() => res.json("Product updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => err.status(400).json("Error: " + err));
});

module.exports = router;
