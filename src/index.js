import { createRecipe, createDefaultRecipes } from './recipes'
import { renderRecipes } from './views'
import { setFilter } from './filters'

const newRecipeBtn = document.querySelector('#create-recipe')
const searchEl = document.querySelector('#search')
const resetBtn = document.querySelector('#reset-recipes')

renderRecipes()

newRecipeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const id = createRecipe()
    location.assign(`/edit.html#${id}`)
})

searchEl.addEventListener('input', (e) => {
    setFilter(e.target.value)
    renderRecipes()
})

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    createDefaultRecipes()
    renderRecipes()
})

