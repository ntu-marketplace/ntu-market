const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    sellerUsername: String,
    productTitle: String,
    productInfo: String,
    imageSrc: [String],
    price: Number,
    category: String,
    isFavourited: Number,
    isBought: Number,
});

module.exports = mongoose.model("Listings", listingSchema);