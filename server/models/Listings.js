const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    sellerUsername: String,
    productTitle: String,
    productInfo: String,
    imageSrc: [String],
    price: Number,
});

module.exports = mongoose.model("Listings", listingSchema);