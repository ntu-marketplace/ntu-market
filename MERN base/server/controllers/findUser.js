const User = require('../models/User');

const handleFindUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json("Missing information")
    try{
        const user = await User.find({username:username, password:password})
                                .then(users => res.json(users))
    }
    catch(e){
        console.log(e);
        res.status(400).json("error")
    }
}

module.exports = {handleFindUser}