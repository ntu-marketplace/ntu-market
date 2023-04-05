const Ads = require('../models/Ads');

const handleGetAds = async (req, res) => {
    return Ads.find()
        .then(ads => {
            res.json(ads);
            console.log(ads);
        })
        .catch(console.log)
}

module.exports = {handleGetAds}