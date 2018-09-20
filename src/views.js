import { sortRecipes, getRecipes, haveIngredients } from './recipes'

const generateRecipeCardDOM = (recipe) => {
    const recipeEl = document.createElement('div')
    const titleEl = document.createElement('h2')
    const ingredientEl = document.createElement('p')

    // set the title
    if (recipe.title.length > 0 ) {
        titleEl.textContent = recipe.title
    } else {
        titleEl.textContent = '[untitled recipe]'
    }
    titleEl.classList.add('recipe-card__title')
    recipeEl.appendChild(titleEl)

    // set the ingredient text
    ingredientEl.textContent = haveIngredients(recipe)
    recipeEl.appendChild(ingredientEl)

    return recipeEl
}

const renderRecipes = () => {
    // if there are recipes
    // for every recipe
    // run generateRecipeCardDOM()
    // an append it to #recipe-cards
    const recipesEl = document.querySelector('#recipe-cards')
    const recipes = getRecipes()

    recipes.forEach((recipe) => {
        const singleRecipeEl = generateRecipeCardDOM(recipe)
        recipesEl.appendChild(singleRecipeEl)
    })

}

export { renderRecipes }