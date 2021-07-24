const mongoose = require("mongoose");
const SubCategory = require("./subCategory")
const Category = require("./category")


const productSchema = new mongoose.Schema({
    Categories:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Category"
        }
    ],
    subCategories:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"SubCategory"
        }
    ],
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  subDesc: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  discountPrice: {
    type: Number,
    require: true,
  },
  size: {
    type: Number,
    require: true,
  },
  qty: {
    type: Number,
    require: true,
  },
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
