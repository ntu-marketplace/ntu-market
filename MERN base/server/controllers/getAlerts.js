const Alerts = require('../models/Alerts');

const handleGetAlerts = async (req, res) => {
    return Alerts.find()
        .then(alerts => {
            res.json(alerts)
        })
        .catch(console.log)
}

module.exports = {handleGetAlerts}