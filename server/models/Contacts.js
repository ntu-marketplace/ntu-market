const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    _id: String,
    contacts: [String]
}, { strict: false });

module.exports = mongoose.model("Contact", contactSchema);