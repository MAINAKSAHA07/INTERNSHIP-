/* eslint-disable */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    Display: Array,
    funfact: String,
    value: String,
    title2: String,
    trans: String,
    language: String,
    lang: String,
    img1:String,
});

module.exports = mongoose.model('phrases', userSchema);

/* eslint-disable */