import uuidv4 from 'uuid/v4'
import { Recipe } from './classes'
import { getDefaultRecipes, imageList } from './default-content'

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

const getRootPath = () => {
    let rootPath = '/'
    if ( location.hostname === 'mocasalter.github.io' ) {
        rootPath = location.pathname
    }
    return rootPath
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
    const newRecipe = new Recipe(id, '', imageList[0] , '', [])
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
        const title = updates.title.trim()
        recipe.title = title
    }

    if (typeof updates.effect === 'string') {
        const effect = updates.effect.trim()
        recipe.effect = effect
    }

    if (updates.image) {
        recipe.image = updates.image
    }

    saveRecipes()
}

// If the user hasn't been to this page before, set some default recipes
if (newSiteVisitor()) {
    createDefaultRecipes()
}

loadRecipes()

export { saveRecipes, getRecipes, createRecipe, removeRecipe, updateRecipe, createDefaultRecipes, loadRecipes, getRootPath }