const Listings = require('../models/Listings');

const handleGetItems = async (req, res) => {
    return Listings.find()
        .then(items => {
            res.json(items);
            console.log(items);
        })
        .catch(console.log)
}

module.exports = {handleGetItems}