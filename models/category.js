const mongoose = require("mongoose")
const SubCategory = require("./subCategory")

const categorySchema = new mongoose.Schema({
    
    subCategories:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"SubCategory"
        }
    ],
    
    name: {
        type: String,
        require: true
    },
    createdDate:{
        type: Date,
        default: Date.now

    },
    status:{
        type:String,
        require:true
    },
    subCategories:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"SubCategory"
        }
    ]
})
const Category = mongoose.model("Category", categorySchema)
module.exports= Category;