const Order = require("../../models/order");
const User = require("../../models/user");

const DBStateGetOrder = async (idUser) => {
    try {
        const userOrder = await User.findById(idUser)
            .select("purchased")
            .populate("purchased")
            .lean()

        if (userOrder === null) {
            return false
        }
        return userOrder

    } catch (error) {
        throw Error(error)
    }
}

module.exports = DBStateGetOrder