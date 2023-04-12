const Contacts = require('../models/Contacts');

const handleGetContacts = async (req, res) => {
    const { _id } = req.body;

    return Contacts.find({ _id })
        .then(result => res.json(result))
        .catch(console.log)
}

const handleUpdateContacts = async (req, res) => {
    const { _id, contacts } = req.body;
    if (!_id || !contacts) return res.status(400).json("Missing information")

    try {
        await Contacts.findOneAndUpdate({ _id }, { contacts }, { upsert: true, setDefaultsOnInsert: true });
        // .then(() => res.json("Successful insert"))
        // .catch(console.log)
        return res.json("Successful insert");
    } catch(e) {
        console.log(e);
        res.status(400).json("Error in insert");
    }
}

module.exports = {handleGetContacts, handleUpdateContacts}