import './sass/style.scss'
import { loadRecipes, createRecipe, createDefaultRecipes } from './recipes'
import { renderRecipes } from './views'
import { setFilter } from './filters'
import { tayceTDialogue } from './taycet-type'

const dialogueBtn = document.getElementById('dialogue-btn')
const newRecipeBtn = document.getElementById('create-recipe')
const searchEl = document.getElementById('search')
const resetBtn = document.getElementById('reset-recipes')
let dialogueCount = 0;

renderRecipes()
tayceTDialogue(dialogueCount, (stopped) => {
    console.log(`stopped: ${stopped}`)
})

dialogueBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(`count: ${dialogueCount}`)
    dialogueCount++
    (dialogueCount > 3) && (dialogueCount = 0)
    tayceTDialogue(dialogueCount, (stopped) => {
        console.log(`stopped: ${stopped}`)
    })
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
