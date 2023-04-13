const mongoose = require('mongoose');

const pointsSchema = new mongoose.Schema({
    TotalCount: Number
});

module.exports = mongoose.model("Points", pointsSchema);