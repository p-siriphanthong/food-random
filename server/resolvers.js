const Restaurant = require('./models/restaurant')
const FoodCategory = require('./models/food-category')
const FoodMenu = require('./models/food-menu')

const resolvers = {
  // Restaurant
  getRestaurant: async ({ id }) => {
    return await Restaurant.findOne({ _id: id })
  },
  getRestaurants: async () => {
    return await Restaurant.find()
  },
  createRestaurant: async ({ input }) => {
    const restaurant = await Restaurant.create(input)
    return await Restaurant.findOne({ _id: restaurant.id })
  },
  updateRestaurant: async ({ id, input }) => {
    await Restaurant.findOneAndUpdate({ _id: id }, input)
    return await Restaurant.findOne({ _id: id })
  },
  deleteRestaurant: async ({ id }) => {
    return await Restaurant.findOneAndRemove({ _id: id })
  },

  // Food Category
  getFoodCategory: async ({ id }) => {
    return await FoodCategory.findOne({ _id: id })
  },
  getFoodCategories: async () => {
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
    return await FoodMenu.findOne({ _id: id }).populate([
      'category',
      'restaurants',
    ])
  },
  getFoodMenus: async () => {
    return await FoodMenu.find().populate(['category', 'restaurants'])
  },
  getRandomizedFoodMenu: async ({ excluding_categories = [] }) => {
    const food_menus = await FoodMenu.find({
      category: { $nin: excluding_categories },
    }).populate(['category', 'restaurants'])
    const random_index = Math.floor(Math.random() * food_menus.length)
    return food_menus.length ? food_menus[random_index] : null
  },
  createFoodMenu: async ({ input }) => {
    const food_menu = await FoodMenu.create(input)
    return await FoodMenu.findOne({ _id: food_menu.id }).populate([
      'category',
      'restaurants',
    ])
  },
  updateFoodMenu: async ({ id, input }) => {
    await FoodMenu.findOneAndUpdate({ _id: id }, input)
    return await FoodMenu.findOne({ _id: id }).populate([
      'category',
      'restaurants',
    ])
  },
  deleteFoodMenu: async ({ id }) => {
    return await FoodMenu.findOneAndRemove({ _id: id }).populate([
      'category',
      'restaurants',
    ])
  },
}

module.exports = resolvers
