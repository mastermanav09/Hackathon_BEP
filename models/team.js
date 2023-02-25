const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name : {
        type : String
    },
    imgUrl : {
        type : String
    }
}, { timestamps: true });

module.exports = mongoose.model("Team",teamSchema);