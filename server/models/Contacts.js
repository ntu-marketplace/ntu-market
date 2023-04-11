const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    _id: String,
    contacts: [String]
});

module.exports = mongoose.model("Contact", contactSchema);