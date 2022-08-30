const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    ingredients: {
        type: [String],
        validator: function(v) {
            return Array.isArray(v) && v.length > 0
        },
        message: 'There need to be at least one ingredient.'
    },
    steps: {
        type: [String]
    },
    typeOfRecipe: {
        type: String
    }
}, {timestamps: true})

const Recipe = mongoose.model('Recipes', RecipeSchema)

module.exports = Recipe