const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const reviewpSchema = new Schema({

    rname : {
        type : String,
        required: true
    },
    rating : {
        type : String,
        required: true
    },
    rev : {
        type : String,
        required: true
    }

})

const Reviewp = mongoose.model("Reviewp",reviewpSchema);
module.exports = Reviewp;