
const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
var router = express.Router();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

var uploadMultiple = upload.fields([
  { name: "file1", maxCount: 10 },
  { name: "file2", maxCount: 10 },
]);

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/uploadfile", uploadMultiple, function (req, res, next) {
  if (req.files) {
    console.log(req.files);

    console.log("files uploaded");
  }
});


module.exports = router;
