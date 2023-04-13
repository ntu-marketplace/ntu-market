const Listings = require('../models/Listings');

const handlePatchItem = async (req, res) => {
    const id = req.params.id;
    const updateOps = {};
    for (const key of Object.keys(req.body)) {
      updateOps[key] = req.body[key];
    }
    Listings.updateOne({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
    };


module.exports = {handlePatchItem}