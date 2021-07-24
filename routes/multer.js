const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
var router = express.Router();
const fs = require('fs')
// const { promisify } = require('util')
// const unlinkAsync = promisify(fs.unlink)
// const dirPath = path.join(__dirname, '..', 'public/upload')

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

router.post("/uploadfile", uploadMultiple, async (req, res, next) => {
  
  if (req.files) {
    console.log(req.body.url);
   console.log(req.files);
    console.log("files uploaded");
  }
});

module.exports=(req,res,next)=>{
  const path = `../public/${req.body.url}`;
  fs.unlink(path,(err)=>{
  if (err){
    res.status=false;
  }else{
    res.status=true;
  }
  next()
  })
}






module.exports = router;
