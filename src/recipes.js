import uuidv4 from 'uuid/v4'

// demo recipes
let recipes = []

const loadRecipes = () => {
    let recipesJSON = localStorage.getItem('recipes')
    try {
        recipes = recipesJSON ? JSON.parse(recipesJSON) : []
    } catch(e) {
        recipes = []
    }
}

const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const getRecipes = () => recipes

const createRecipe = () => {
    const id = uuidv4()
    recipes.push({
        id: id,
        title: '',
        effect: '',
        ingredients: []
    })
    saveRecipes()
    return id
}

const createIngredient = (recipeId, name) => {
    const recipe = recipes.find(recipe => recipe.id === recipeId)
    const id = uuidv4()
    recipe.ingredients.push({
        id,
        name,
        available: false
    })
    saveRecipes()
}

const removeRecipe = (id) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)
    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
        saveRecipes()
    }
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

const updateRecipe = (id, updates) => {
    const recipe = recipes.find(recipe => recipe.id === id)

    if (!recipe) {
        return
    }

    if (typeof updates.title === 'string') {
        const title = document.querySelector('#recipe-title').value.trim()
        recipe.title = title
    }

    if (typeof updates.effect === 'string') {
        const effect = document.querySelector('#recipe-effect').value.trim()
        recipe.effect = effect
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

loadRecipes()

export { saveRecipes, getRecipes, createRecipe, createIngredient, removeRecipe, updateRecipe, haveIngredients, toggleIngredient, removeIngredient }