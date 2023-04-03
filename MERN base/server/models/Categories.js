const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: String,
    imageSrc: String,
});

module.exports = mongoose.model("Categories", categorySchema);