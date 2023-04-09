const Listings = require('../models/Listings');

const handleDelItems = async (req, res) => {
    try{
        Listings.findByIdAndDelete(req.params.id).then((listing)=>{
            if(!listing){
                return res.status(404).send();
            }
            res.send(listing);
        })
    }
    catch(error) {
        res.status(500).send(error);
    }
};

module.exports = {handleDelItems}