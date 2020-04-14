const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },

    productName: {
      type: String,
      required: true
    },

    productLink: {
      type: String,
      required: true
    },

    company: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
