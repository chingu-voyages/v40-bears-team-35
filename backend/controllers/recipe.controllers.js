const Recipe = require('../models/recipe.models')
const User = require('../models/user.models')

module.exports.createRecipe = (req, res) => {
    const {name, ingredients, steps, typeOfRecipe, userId} = req.body
    Recipe.create({
        name,
        ingredients,
        steps,
        typeOfRecipe
    })
    .then(resp => {
        User.findByIdAndUpdate(
            userId,
            {$push: {
                recipes: resp._id
            }},
            {new: true, useFindAndModify: false})
            .then(() => res.json({message: "New recipe created"}))
            .catch(err => res.json(err))
    })
    .catch(err => res.json(err))
}

module.exports.allRecipes = (req, res) => {
    Recipe.find()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}