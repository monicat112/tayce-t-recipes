import uuidv4 from 'uuid/v4'
import { Recipe } from './classes'
import { getDefaultRecipes } from './default-recipes'

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

const newSiteVisitor = () => {
    let visitedJSON = localStorage.getItem('recipes-new-visitor')
    if (!visitedJSON) {
        localStorage.setItem('recipes-new-visitor', JSON.stringify(false))
        return true
    } else {
        return false
    }
}

const createDefaultRecipes = () => {
    recipes = getDefaultRecipes()
    saveRecipes()
}

const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const getRecipes = () => recipes

const createRecipe = () => {
    const id = uuidv4()
    const newRecipe = new Recipe(id, '', '', [])
    recipes.push(newRecipe)
    saveRecipes()
    return id
}

const removeRecipe = (id) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)
    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
        saveRecipes()
    }
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

// If the user hasn't been to this page before, set some default recipes
if (newSiteVisitor()) {
    createDefaultRecipes()
}

loadRecipes()

export { saveRecipes, getRecipes, createRecipe, removeRecipe, updateRecipe, createDefaultRecipes }