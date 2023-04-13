const Points = require('../models/Points');

const handleGetPoints = async (req, res) => {
    return Points.find()
        .then(points => {
            res.json(points);
        })
        .catch(console.log)
}

module.exports = {handleGetPoints}