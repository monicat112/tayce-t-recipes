import { getRecipes } from './recipes'
import { toggleIngredient, haveIngredients, removeIngredient } from './ingredients'
import { getFilter } from './filters'
import { imageList, tayceTDialogue } from './default-content'

const ingretientsListEl = document.getElementById('recipe-ingredients-list')
let dialogueCount = 0

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
    const recipeLink = `/edit.html#${recipe.id}`

    // container
    recipeEl.classList.add('list-box')

    // media block
    mediaEl.classList.add('media-block')
    recipeEl.appendChild(mediaEl)

    // image link 
    imageLinkEl.setAttribute('src', recipeLink)
    mediaEl.appendChild(imageLinkEl)

    // image
    imageEl.setAttribute('src', `./images/${recipe.image.fileName}.png`)
    imageEl.setAttribute('alt', '')
    imageLinkEl.appendChild(imageEl)

    // text wrapper
    mediaEl.appendChild(mediaTextEl)

    // title link
    titleLinkEl.setAttribute('href', recipeLink)
    mediaTextEl.appendChild(titleLinkEl)

    // title
    if (recipe.title.length > 0 ) {
        titleEl.textContent = recipe.title
    } else {
        titleEl.textContent = '[Untitled Recipe]'
    }
    titleEl.classList.add('recipe-card__title')
    titleLinkEl.appendChild(titleEl)

    // ingredient text
    ingredientEl.textContent = haveIngredients(recipe)
    ingredientEl.classList.add('secondary-body')
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
    const titleEl = document.getElementById('recipe-title')
    const effectEl = document.getElementById('recipe-effect')
    const imageEl = document.getElementById('image')
    const imageSelectEl = document.getElementById('image-select')

    // find the individual recipe
    const recipes = getRecipes()
    const recipe = recipes.find(recipe => recipe.id === recipeId)

    // if that recipe doesn't exist, go back to the main page
    if (!recipe) {
        location.assign('/')
    }

    // set values
    titleEl.value = recipe.title
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
    const checkbox = document.createElement('input')
    const outerCheckbox = document.createElement('div')
    const innerCheckbox = document.createElement('div')
    const remove = document.createElement('button')
    const idName = ingredient.name.toLowerCase().replace(' ', '-')

    // set id
    ingredientEl.id = idName
    
    // set label
    ingredientEl.appendChild(label)
    label.textContent = ingredient.name
    label.classList.add('checkbox-label')

    // set checkbox items for CSS
    outerCheckbox.classList.add('outer')
    innerCheckbox.classList.add('inner')
    label.prepend(outerCheckbox)
    outerCheckbox.appendChild(innerCheckbox)  

    // set checkbox
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

    // remove ingredient
    remove.addEventListener('click', (e) => {
        e.preventDefault()
        removeIngredient(recipeId, ingredient.id)
        ingredientEl.remove()
    })
    
    return ingredientEl
}

const runDialogue = () => {
    const element = document.getElementById('dialogue')
    const dialogueBtn = document.getElementById('dialogue-btn')

    if (dialogueCount === 0) {
        dialogueBtn.textContent = 'run dialogue'
    }

    const callback = (text) => {
        element.textContent = text
    }

    const options = {
        typeSpeed: 30,
        deleteSpeed: 1,
        pauseDuration: 250,
        repeat: false
    }

    switch (dialogueCount) {
        case 0:
            tayceTDialogue.dialogueGreeting(callback, options)
            break;
        case 1:
            tayceTDialogue.dialogueRequest(callback, options)
            break;
        case 2:
            tayceTDialogue.dialogueInstructions(callback, options)
            break;
        case 3:
            tayceTDialogue.dialogueMistake(callback, options)
            break;
        default:
            break;
    }

    dialogueCount++

    if (dialogueCount >= Object.keys(tayceTDialogue).length) {
        dialogueCount = 0
        dialogueBtn.textContent = 'restart'
    }
}

export { renderRecipes, renderIngredients, initializeEditPage, runDialogue, stop }