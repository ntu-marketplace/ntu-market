const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
    imageSrc : String,
});

module.exports = mongoose.model("Ads", adsSchema);