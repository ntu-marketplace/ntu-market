const Contacts = require('../models/Contacts');

const handleGetContacts = async (req, res) => {
    const { _id } = req.body;

    return Contacts.find({ _id })
        .then(result => res.json(result))
        .catch(console.log)
}

module.exports = {handleGetContacts}