

/* eslint-disable */
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    summary: String,
    body: String,
    author: String,
    link:String,
    smimg:String,// IMG SIZE 700X400 google link //
    limg:String,
    date:String,
    img:   
    {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('blogs', userSchema);
/* eslint-disable */