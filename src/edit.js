import './sass/style.scss'
import { renderIngredients, initializeEditPage } from './views'
import { loadRecipes, updateRecipe, removeRecipe } from './recipes'
import { createIngredient } from './ingredients'
import { imageList } from './default-content'
import { handleFirstTab } from './focus-ring-fix'

const recipeId = location.hash.substring(1)
const titleEl = document.getElementById('recipe-title')
const pageTitleEl = document.getElementById('page-title')
const effectEl = document.getElementById('recipe-effect')
const ingredientBtn = document.getElementById('create-ingredient')
const imageSelectEl = document.getElementById('image-select')
const deleteBtn = document.getElementById('delete-btn')

initializeEditPage(recipeId)

window.addEventListener('keydown', handleFirstTab);

titleEl.addEventListener('input', (e) => {
    const newTitle = e.target.value.trim()
    if (newTitle !== '') {
        pageTitleEl.textContent = newTitle
    } else {
        pageTitleEl.textContent = '[Untitled Recipe]'
    }
    updateRecipe(recipeId, {
        title: newTitle
    })
})

effectEl.addEventListener('input', (e) => {
    updateRecipe(recipeId, {
        effect: e.target.value
    })
})

ingredientBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let ingredientEl = document.getElementById('recipe-ingredient').value.trim()
    if (ingredientEl !== '') {
        const name = ingredientEl
        createIngredient(recipeId, name)
        renderIngredients(recipeId)
        document.getElementById('recipe-ingredient').value = ''
    }
})

imageSelectEl.addEventListener('change', (e) => {
    const imageEl = document.getElementById('image')
    imageEl.setAttribute('src', `./images/${e.target.value}-lg.png`)
    const newImage = imageList.find((image) => image.fileName === e.target.value)
    updateRecipe(recipeId, {
        image: newImage
    })
})

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    removeRecipe(recipeId)
    location.assign(`/`)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'recipes') {
        loadRecipes()
        initializeEditPage(recipeId)
    }
})