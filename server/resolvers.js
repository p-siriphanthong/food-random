const resolvers = {
  // Food Category
  getFoodCategory: ({ id }) => ({}),
  getFoodCategories: () => ([]),
  createFoodCategory: ({ name }) => ({}),
  updateFoodCategory: ({ id, name }) => ({}),
  deleteFoodCategory: ({ id }) => ({}),

  // Food
  getFood: ({ id }) => ({}),
  getFoods: () => ([]),
  createFood: ({ input }) => ({}),
  updateFood: ({ id, input }) => ({}),
  deleteFood: ({ id }) => ({}),
}

module.exports = resolvers