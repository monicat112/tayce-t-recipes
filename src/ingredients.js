import uuidv4 from 'uuid/v4'
import { getRecipes, saveRecipes } from './recipes'
import { Ingredient } from './classes'

const recipes = getRecipes()

const createIngredient = (recipeId, name) => {
    const recipe = recipes.find(recipe => recipe.id === recipeId)
    const id = uuidv4()
    const newIngredient = new Ingredient(id, name, false)
    recipe.ingredients.push(newIngredient)
    saveRecipes()
}

const removeIngredient = (recipeId, ingredientId) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId)
    const ingredientIndex = recipes[recipeIndex].ingredients.findIndex((ingredient) => ingredient.id === ingredientId)
    if (recipeIndex > -1 && ingredientIndex > -1)  {
        recipes[recipeIndex].ingredients.splice(ingredientIndex, 1)
        saveRecipes()
    }
}

const toggleIngredient = (ingredient) => {
    if (ingredient.available) {
        ingredient.available = false
    } else {
        ingredient.available = true
    }
    saveRecipes()
}

const haveIngredients = (recipe) => {
    let qty = 'have some'
    const noIngerdients = recipe.ingredients.every((ingredient) => ingredient.available === false)
    const allIngerdients = recipe.ingredients.every((ingredient) => ingredient.available === true)

    if (noIngerdients) {
        qty = 'don\'t have any' 
    } else if (allIngerdients) {
        qty = 'have all'
    }

    return `You ${qty} of the ingredients`
}

export { createIngredient, haveIngredients, toggleIngredient, removeIngredient }