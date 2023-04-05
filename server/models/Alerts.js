const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    title: String,
    content: String,
});

module.exports = mongoose.model("Alerts", alertSchema);