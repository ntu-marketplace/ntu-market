const Categories = require('../models/Categories');

const handleGetCategories = async (req, res) => {
    return Categories.find()
        .then(categories => {
            res.json(categories);
            console.log(categories);
        })
        .catch(console.log)
}

module.exports = {handleGetCategories}