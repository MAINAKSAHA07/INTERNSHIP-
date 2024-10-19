/* eslint-disable */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    words: Array,
    trans:Array,
    link:String,
    engSentence:Array,
    frenchSentence:Array,
    image:String,
});

module.exports = mongoose.model('cates', userSchema);
/* eslint-disable */