const mongoose = require('mongoose')

const foodCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('FoodCategory', foodCategorySchema)