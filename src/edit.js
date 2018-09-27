import { renderIngredients, initializeEditPage } from './views'
import { updateRecipe, removeRecipe } from './recipes'
import { createIngredient } from './ingredients'

const recipeId = location.hash.substring(1)
const titleEl = document.querySelector('#recipe-title')
const effectEl = document.querySelector('#recipe-effect')
const ingredientBtn = document.querySelector('#create-ingredient')
const deleteBtn = document.querySelector('#delete-btn')

initializeEditPage(recipeId)

titleEl.addEventListener('input', (e) => {
    updateRecipe(recipeId, {
        title: e.target.value
    })
})

effectEl.addEventListener('input', (e) => {
    updateRecipe(recipeId, {
        effect: e.target.value
    })
})

ingredientBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.querySelector('#recipe-ingredient').value
    createIngredient(recipeId, name)
    renderIngredients(recipeId)
    document.querySelector('#recipe-ingredient').value = ''
})

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    removeRecipe(recipeId)
    location.assign(`/`)
})