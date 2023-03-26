const User = require('../models/User');

const handleCreateUser = async (req, res) => {
    const { username, password, name, email, mobile } = req.body;
    if (!username || !password || !email) return res.status(400).json("Missing information")

    try {
        const user = await User.create({username, password, name, email, mobile});
        // .then(() => res.json("Successful insert"))
        // .catch(console.log)
        return res.json("Successful insert");
    } catch(e) {
        console.log(e);
        res.status(400).json("Error in insert");
    }
}

module.exports = {handleCreateUser}