import { getRecipes, getRootPath } from './recipes'
import { toggleIngredient, haveIngredients, removeIngredient } from './ingredients'
import { getFilter } from './filters'
import { imageList } from './default-content'

const ingretientsListEl = document.getElementById('recipe-ingredients-list')

const generateRecipeCardDOM = (recipe) => {
    const recipeEl = document.createElement('div')
    const mediaEl = document.createElement('div')
    const mediaTextEl = document.createElement('div')
    const titleLinkEl = document.createElement('a')
    const titleEl = document.createElement('h2')
    const ingredientEl = document.createElement('p')
    const imageLinkEl = document.createElement('a')
    const imageEl = document.createElement('img')
    const recipeButtonEl = document.createElement('a')
    const recipeLink = `${getRootPath()}edit.html#${recipe.id}`
    
    // container
    recipeEl.classList.add('list-box', 'recipe-card')

    // media block
    mediaEl.classList.add('media-block')
    recipeEl.appendChild(mediaEl)

    // image link 
    imageLinkEl.setAttribute('href', recipeLink)
    mediaEl.appendChild(imageLinkEl)

    // image
    imageEl.setAttribute('src', `./images/${recipe.image.fileName}.png`)
    imageEl.setAttribute('alt', '')
    imageLinkEl.appendChild(imageEl)

    // text wrapper
    mediaEl.appendChild(mediaTextEl)

    // title
    titleEl.classList.add('title-bigger')
    mediaTextEl.appendChild(titleEl)

    // title link
    if (recipe.title.length > 0 ) {
        titleLinkEl.textContent = recipe.title
    } else {
        titleLinkEl.textContent = '[Untitled Recipe]'
    }
    titleLinkEl.setAttribute('href', recipeLink)
    titleLinkEl.classList.add('reverse-link-underline')
    titleEl.appendChild(titleLinkEl)

    // ingredient text
    ingredientEl.textContent = haveIngredients(recipe)
    ingredientEl.classList.add('novelty-body-text')
    mediaTextEl.appendChild(ingredientEl)

    // button
    recipeButtonEl.setAttribute('href', recipeLink)
    recipeButtonEl.classList.add('button')
    recipeButtonEl.innerText = 'edit recipe'
    mediaTextEl.appendChild(recipeButtonEl)

    return recipeEl
}

const renderRecipes = () => {
    const recipesEl = document.getElementById('recipe-cards')
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
        messageEl.textContent = 'No recipes.'
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
    const titleEl = document.getElementById('recipe-title')
    const pageTitleEl = document.getElementById('page-title')
    const effectEl = document.getElementById('recipe-effect')
    const imageEl = document.getElementById('image')
    const imageSelectEl = document.getElementById('image-select')

    // find the individual recipe
    const recipes = getRecipes()
    const recipe = recipes.find(recipe => recipe.id === recipeId)

    // if that recipe doesn't exist, go back to the main page
    if (!recipe) {
        location.assign(getRootPath())
    }

    // set values
    titleEl.value = recipe.title
    if (recipe.title !== '') {
        pageTitleEl.textContent = recipe.title
    }
    effectEl.value = recipe.effect
    imageEl.setAttribute('src', `./images/${recipe.image.fileName}-lg.png`)
    renderIngredients(recipeId)

    // create the image select
    let itemSelected = false
    imageList.forEach((image) => {
        const selectOption = document.createElement('option')
        selectOption.setAttribute('value', image.fileName)
        selectOption.textContent = image.name
        if (image.name === recipe.image.name) {
            selectOption.setAttribute('selected', true)
            itemSelected = true
        }
        imageSelectEl.appendChild(selectOption)
    })
    if (!itemSelected) {
        imageSelectEl.childNodes[1].setAttribute('selected', true)
    }

}

const initializeIngredient = (recipeId, ingredient) => {
    const ingredientEl = document.createElement('li')
    const label = document.createElement('label')
    const labelText = document.createElement('span') // do this part next
    const checkbox = document.createElement('input')
    const outerCheckbox = document.createElement('div')
    const innerCheckbox = document.createElement('div')
    const remove = document.createElement('button')
    const idName = ingredient.name.toLowerCase().replace(' ', '-')

    // set id
    ingredientEl.id = idName
    
    // set label (but not text)
    ingredientEl.appendChild(label)
    label.classList.add('checkbox-label')

    // set checkbox input
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = ingredient.available
    label.appendChild(checkbox) 
    checkbox.addEventListener('change', (e) => {
        toggleIngredient(ingredient)
    })

    // set checkbox items for CSS
    outerCheckbox.classList.add('outer')
    innerCheckbox.classList.add('inner')
    label.appendChild(outerCheckbox) 
    outerCheckbox.appendChild(innerCheckbox)  

    // set label text
    labelText.textContent = ingredient.name
    label.appendChild(labelText)

    // create remove link
    remove.textContent = 'remove'
    remove.classList.add('un-button', 'un-button--danger')
    ingredientEl.appendChild(remove)

    // remove ingredient
    remove.addEventListener('click', (e) => {
        e.preventDefault()
        removeIngredient(recipeId, ingredient.id)
        ingredientEl.remove()
    })
    
    return ingredientEl
}

export { renderRecipes, renderIngredients, initializeEditPage, stop }