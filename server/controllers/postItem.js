const Listings = require('../models/Listings');

const handlePostItem = async (req, res) => {
    const { username, title, info, url, price } = req.body;
    if (!username || !title || !info || !url || !price) return res.status(400).json("Missing information")
    console.log(req.body);

    console.log(typeof price)
    const data = {sellerUsername: username, productTitle: title, productInfo: info, price: parseFloat(price), imageSrc: [...url]}
    console.log(data)
    try {
        return await Listings
        .create(data)
        .then(() => res.json("Successful insert"))
        .catch(console.log)
    } catch(e) {
        console.log(e);
        res.status(400).json("Error in insert")
    }
}

module.exports = {handlePostItem}