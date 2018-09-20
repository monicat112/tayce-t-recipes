import uuidv4 from 'uuid/v4'

// demo recipes
let recipes = []

const loadRecipes = () => {
    let recipesJSON = localStorage.getItem('recipes')
    try {
        recipes = recipesJSON ? JSON.parse(recipesJSON) : []
    } catch(e) {
        recipes = []
    }
}

const saveRecipes = (recipes = recipes) => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const getRecipes = () => recipes

const createDemoRecipes = () => { 
    recipes = [
        {
            id: '4-sh',
            title: 'Honey Shroom',
            effect: 'Restores 5 HP and 5 FP',
            ingredients: [
                {
                    name: 'Mushroom',
                    available: false
                },
                {
                    name: 'Honey Syrup',
                    available: false
                }
            ]
        },
        {
            id: '4-ck',
            title: 'Cake',
            effect: 'Restores 15 FP',
            ingredients: [
                {
                    name: 'Cake Mix',
                    available: true
                }
            ]
        },
        {
            id: '9-ff',
            title: 'Fire Flower',
            effect: 'Deals 3 HP of damage to all enemies.',
            ingredients: [
                {
                    name: 'Dried Fruit',
                    available: false
                },
                {
                    name: 'Strange Leaf',
                    available: true
                }
            ]
        }
    ]
    saveRecipes(recipes)
}

const createRecipe = () => {
    recipes.push({
        id: uuidv4(),
        title: '',
        stats: '',
        ingredients: []
    })
    saveRecipes()
}


const deleteRecipe = (id) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)
    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
        saveRecipes()
    }
}

const sortRecipes = (filters) => {

}

const haveIngredients = (recipe) => {
    let qty = 'some'
    const noIngerdients = recipe.ingredients.every((ingredient) => ingredient.available === false)
    const allIngerdients = recipe.ingredients.every((ingredient) => ingredient.available === true)

    if (noIngerdients) {
        qty = 'none'
    } else if (allIngerdients) {
        qty = 'all'
    }

    return `You have ${qty} of the ingredients`
}

loadRecipes()

export { saveRecipes, getRecipes, createDemoRecipes, createRecipe, deleteRecipe, sortRecipes, haveIngredients }