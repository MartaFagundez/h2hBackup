const { Category } = require("../models/category");
const Product = require("../models/product");

const productGetCategory = async (maincategory, subcategory) => {

    const subcategories = await Category.findOne({ name: maincategory })
        .subCategories.populate("products")
}