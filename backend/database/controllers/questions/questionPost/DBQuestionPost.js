const Product = require("../../../models/product");
const Question = require("../../../models/question");
const User = require("../../../models/user");

const DBQuestionPost = async (idUser, question, idProduct) => {
    try {
        const newQuestion = new Question(question)
        const updateUser = await User.findByIdAndUpdate(idUser, { $push: { questions: newQuestion._id } }, { returnDocument: "after" })
        const updateProduct = await Product.findByIdAndUpdate(idProduct, { $push: { questions: newQuestion._id } }, { returnDocument: "after" })
        newQuestion.user = idUser
        newQuestion.product = idProduct

        const response = await newQuestion.save()
        return response
    } catch (error) {
        throw Error(error)
    }
}

module.exports = DBQuestionPost