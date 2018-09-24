import { saveRecipes, getRecipes, createDemoRecipes, createRecipe, removeRecipe } from './recipes'
import { renderRecipes } from './views'
import { setFilter } from './filters'

renderRecipes()

document.querySelector('#create-recipe').addEventListener('click', (e) => {
    const id = createRecipe()
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search').addEventListener('input', (e) => {
    setFilter(e.target.value)
    renderRecipes()
})
