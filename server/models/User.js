const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    mobile: String,
    verified: Boolean
});

module.exports = mongoose.model("User", userSchema);