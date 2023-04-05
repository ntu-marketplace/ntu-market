const User = require('../models/User');

const handleGetUsers = async (req, res) => {
    return User.find()
        .then(users => res.json(users))
        .catch(console.log)
}

module.exports = {handleGetUsers}