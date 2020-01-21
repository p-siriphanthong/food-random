const mongoose = require('mongoose')

const foodMenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  category: {
    ref: 'FoodCategory',
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
})

module.exports = mongoose.model('FoodMenu', foodMenuSchema)