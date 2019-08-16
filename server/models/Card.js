const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: String,
  questions: [{ type: Object }],
})

const Card = mongoose.model('Card', cardSchema);

module.exports = { Card };