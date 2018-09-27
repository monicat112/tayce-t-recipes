import { renderIngredients, initializeEditPage } from './views'
import { updateRecipe, removeRecipe } from './recipes'
import { createIngredient } from './ingredients'
import { imageList } from './default-content'

const recipeId = location.hash.substring(1)
const titleEl = document.querySelector('#recipe-title')
const effectEl = document.querySelector('#recipe-effect')
const ingredientBtn = document.querySelector('#create-ingredient')
const imageSelectEl = document.querySelector('#image-select')
const deleteBtn = document.querySelector('#delete-btn')

initializeEditPage(recipeId)

// todo: image attribute is being deleted from the recipe object when anything is edited

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

imageSelectEl.addEventListener('change', (e) => {
    const imageEl = document.querySelector('#image')
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