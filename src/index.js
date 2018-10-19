import './sass/style.scss'
import { loadRecipes, createRecipe, createDefaultRecipes } from './recipes'
import { renderRecipes, runDialogue } from './views'
import { setFilter } from './filters'

const dialogueBtn = document.getElementById('dialogue-btn')
const newRecipeBtn = document.getElementById('create-recipe')
const searchEl = document.getElementById('search')
const resetBtn = document.getElementById('reset-recipes')

renderRecipes()
runDialogue()

dialogueBtn.addEventListener('click', (e) => {
    e.preventDefault()
    runDialogue()
})

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

window.addEventListener('storage', (e) => {
    if (e.key === 'recipes') {
        // loadRecipes()
        renderRecipes()
        console.log('recipes updated')
    }
})
