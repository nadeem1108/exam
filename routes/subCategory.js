var express = require("express");
var router = express.Router();
const SubCategory = require("../models/subCategory");

router.post("/", async (req, res, next) => {
  try {
    var subCategory = await new SubCategory({
      name: req.body.name,
      createdDate: req.body.createdDate,
      status: req.body.status,
      products: req.body.products,
    });
    subCategory
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
