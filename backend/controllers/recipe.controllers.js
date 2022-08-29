const Recipe = require('../models/recipe.models')

module.exports.createRecipe = (req, res) => {
    Recipe.create(req.body)
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

module.exports.allRecipes = (req, res) => {
    Recipe.find()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}