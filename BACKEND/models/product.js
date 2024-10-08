const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    pname : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    psize : {
        type : String,
        required: true
    },
    pcolour : {
        type : String,
        required: true
    },
    pstock : {
        type : Number,
        required: true
    }

})

const Product = mongoose.model("Product",productSchema);
module.exports = Product;