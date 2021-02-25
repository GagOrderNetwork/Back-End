const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },

    price: {
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
