var express = require("express");
var router = express.Router();
const Product = require("../models/product");


router.post("/", async (req, res, next) => {

  // res.status(200).json({val:req.body})
    try {
      var product = await new Product({
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.subDesc,
        subDesc: req.body.subDesc,
        discountPrice: req.body.discountPrice,
        size: req.body.size,
        qty: req.body.qty,
      });
      product
        .save()
        .then(() => {
          console.log("data created");
        })
        .catch((err) => {
          console.log("failed", err);
        });
    } catch (e) {
      console.log("error Message", e.message);
    }
  });
  module.exports = router;
