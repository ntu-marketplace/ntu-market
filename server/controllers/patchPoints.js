const Points = require('../models/Points');

const handlePatchPoints = async (req, res) => {
  const id = "6437f56ede01e4f0515935c6";
  try {
    const result = await Points.findByIdAndUpdate(id, { $inc: { TotalCount: 100 } }, { new: true });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

module.exports = { handlePatchPoints };
