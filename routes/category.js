var express = require("express");
var router = express.Router();
const Category = require("../models/category");

/* GET users listing. */
router.post("/", async (req, res, next) => {

 

  try {
    var category = await new Category({
      name: req.body.name,
      createdDate: req.body.createdDate,
      status: req.body.status,
      subcategories: req.body.subcategories,
    });
    category
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
