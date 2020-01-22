const mongoose = require('mongoose')

const foodMenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    ref: 'FoodCategory',
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  restaurants: [
    {
      ref: 'Restaurant',
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
})

module.exports = mongoose.model('FoodMenu', foodMenuSchema)
