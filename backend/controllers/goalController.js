// @desc Get goals
// @route GET

const getGoals = (req, res) => {
    res.status(200).json({ message: "Get goals" });
}


module.exports = {
    getGoals,
}