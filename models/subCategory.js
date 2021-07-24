const mongoose = require("mongoose")
const Product = require("./product")
const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    createdDate: {
        type: Date,
        default: Date.now

    },
    status: {
        type: String,
        require: true
    },
    products:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ]
})

const SubCategory = mongoose.model("SubCategory",subCategorySchema)
module.exports= SubCategory