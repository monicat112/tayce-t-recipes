import { getRecipes } from './recipes'
import { toggleIngredient, haveIngredients, removeIngredient } from './ingredients'
import { getFilter } from './filters'
import { getDefaultRecipes } from './default-content'

const ingretientsListEl = document.querySelector('#recipe-ingredients-list')

const generateRecipeCardDOM = (recipe) => {
    const recipeEl = document.createElement('a')
    const titleEl = document.createElement('h2')
    const ingredientEl = document.createElement('p')
    const imageEl = document.createElement('img')

    // set the link
    recipeEl.setAttribute('href', `/edit.html#${recipe.id}`)

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

    // set the image
    // imageEl.setAttribute('src', recipe.image.fileName())
    console.log('file name views: ', recipe.image)
    // recipeEl.appendChild(imageEl)

    return recipeEl
}

const renderRecipes = () => {
    const recipesEl = document.querySelector('#recipe-cards')
    const recipes = getRecipes()
    const filter = getFilter()
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(filter.toLowerCase()))

    recipesEl.innerHTML = ''

    if ( filteredRecipes.length > 0 ) {
        filteredRecipes.forEach((recipe) => {
            const singleRecipeEl = generateRecipeCardDOM(recipe)
            recipesEl.appendChild(singleRecipeEl)
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = "No recipes."
        recipesEl.appendChild(messageEl)
    }
}

const renderIngredients = (recipeId) => {
    const recipes = getRecipes()
    const recipe = recipes.find(recipe => recipe.id === recipeId)

    ingretientsListEl.innerHTML = ''
    
    recipe.ingredients.forEach((ingredient) => {
        const ingredientEl = initializeIngredient(recipe.id, ingredient)
        ingretientsListEl.appendChild(ingredientEl)
    })
}

const initializeEditPage = (recipeId) => {
    const titleEl = document.querySelector('#recipe-title')
    const effectEl = document.querySelector('#recipe-effect')

    // find the individual recipe
    const recipes = getRecipes()
    const recipe = recipes.find(recipe => recipe.id === recipeId)

    // if that recipe doesn't exist, go back to the main page
    if (!recipe) {
        location.assign('/')
    }

    // set all the values
    titleEl.value = recipe.title
    effectEl.value = recipe.effect
    renderIngredients(recipeId)
    //renderImagePicker()
    // const select = document.createElement('select')
    // for each image, create an 'option' element
}

const initializeIngredient = (recipeId, ingredient) => {
    const ingredientEl = document.createElement('li')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    const remove = document.createElement('button')
    const idName = ingredient.name.toLowerCase().replace(' ', '-')

    // set id
    ingredientEl.id = idName

    // set ingredient text
    label.textContent = ingredient.name
    ingredientEl.appendChild(label)

    // add checkbox to label
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = ingredient.available
    label.prepend(checkbox)
    checkbox.addEventListener('change', (e) => {
        toggleIngredient(ingredient)
    })
    
    // create remove link
    remove.textContent = 'remove'
    remove.classList.add('remove-ingredient')
    ingredientEl.appendChild(remove)

    // remove ingretient
    remove.addEventListener('click', (e) => {
        e.preventDefault()
        removeIngredient(recipeId, ingredient.id)
        ingredientEl.remove()
    })
    
    return ingredientEl
}

export { renderRecipes, renderIngredients, initializeEditPage }