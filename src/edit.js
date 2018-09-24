import { renderIngredients, initializeEditPage } from './views'
import { createIngredient, updateRecipe, removeRecipe } from './recipes'

const recipeId = location.hash.substring(1)
const titleEl = document.querySelector('#recipe-title')
const effectEl = document.querySelector('#recipe-effect')
const ingredientBtn = document.querySelector('#create-ingredient')

removeRecipe('d1de7874-2c88-46a8-b545-247e1d963111')
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
    let name = document.querySelector('#recipe-ingredient').value
    createIngredient(recipeId, name)
    renderIngredients(recipeId)
    document.querySelector('#recipe-ingredient').value = ''
})