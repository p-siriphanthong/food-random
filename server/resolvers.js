const FoodCategory = require('./models/food-category')
const Food = require('./models/food')

const resolvers = {
  // Food Category
  getFoodCategory: async ({ id }) => {
    return await FoodCategory.findOne({ _id: id });
  },
  getFoodCategories: async () => {
    return await FoodCategory.find()
  },
  createFoodCategory: async ({ name }) => {
    const food_category = await FoodCategory.create({ name });
    return await FoodCategory.findOne({ _id: food_category.id })
  },
  updateFoodCategory: async ({ id, name }) => {
    await FoodCategory.findOneAndUpdate({ _id: id }, { name })
    return await FoodCategory.findOne({ _id: id })
  },
  deleteFoodCategory: async ({ id }) => {
    return await FoodCategory.findOneAndRemove({ _id: id })
  },

  // Food
  getFood: async ({ id }) => {
    return await Food.findOne({ _id: id }).populate('category');
  },
  getFoods: async () => {
    return await Food.find().populate('category')
  },
  createFood: async ({ input }) => {
    const food = await Food.create(input);
    return await Food.findOne({ _id: food.id }).populate('category')
  },
  updateFood: async ({ id, input }) => {
    await Food.findOneAndUpdate({ _id: id }, input)
    return await Food.findOne({ _id: id }).populate('category')
  },
  deleteFood: async ({ id }) => {
    return await Food.findOneAndRemove({ _id: id }).populate('category')
  },
}

module.exports = resolvers