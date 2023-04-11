const Contacts = require('../models/Contacts');

const handleUpdateContacts = async (req, res) => {
    const { _id, contacts } = req.body;
    if (!_id || !contact) return res.status(400).json("Missing information")

    try {
        Contacts.updateOne({ _id }, { contacts });
        // .then(() => res.json("Successful insert"))
        // .catch(console.log)
        return res.json("Successful insert");
    } catch(e) {
        console.log(e);
        res.status(400).json("Error in insert");
    }
}

module.exports = {handleUpdateContacts}