const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    productLink: {
      type: String,
      required: true,
    },

    productPrice: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
