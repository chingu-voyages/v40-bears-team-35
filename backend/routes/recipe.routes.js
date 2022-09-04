const RecipeController = require('../controllers/recipe.controllers')

module.exports = app => {
    app.get('/api/recipes', RecipeController.allRecipes)
    app.post('/api/recipe', RecipeController.createRecipe)
}