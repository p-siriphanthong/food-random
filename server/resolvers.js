const FoodCategory = require('./models/food-category')
const FoodMenu = require('./models/food-menu')

const resolvers = {
  // Food Category
  getFoodMenuCategory: async ({ id }) => {
    return await FoodCategory.findOne({ _id: id })
  },
  getFoodMenuCategories: async () => {
    return await FoodCategory.find()
  },
  createFoodCategory: async ({ name }) => {
    const food_category = await FoodCategory.create({ name })
    return await FoodCategory.findOne({ _id: food_category.id })
  },
  updateFoodCategory: async ({ id, name }) => {
    await FoodCategory.findOneAndUpdate({ _id: id }, { name })
    return await FoodCategory.findOne({ _id: id })
  },
  deleteFoodCategory: async ({ id }) => {
    return await FoodCategory.findOneAndRemove({ _id: id })
  },

  // Food Menu
  getFoodMenu: async ({ id }) => {
    return await FoodMenu.findOne({ _id: id }).populate('category')
  },
  getFoodMenus: async () => {
    return await FoodMenu.find().populate('category')
  },
  createFoodMenu: async ({ input }) => {
    const foodMenu = await FoodMenu.create(input)
    return await FoodMenu.findOne({ _id: foodMenu.id }).populate('category')
  },
  updateFoodMenu: async ({ id, input }) => {
    await FoodMenu.findOneAndUpdate({ _id: id }, input)
    return await FoodMenu.findOne({ _id: id }).populate('category')
  },
  deleteFoodMenu: async ({ id }) => {
    return await FoodMenu.findOneAndRemove({ _id: id }).populate('category')
  },
}

module.exports = resolvers
