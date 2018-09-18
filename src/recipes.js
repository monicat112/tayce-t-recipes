import uuidv4 from 'uuid/v4'

let recipes = []

createRecipe = () => {
    recipes.push({
        id: '1234',
        title: '',
        body: '',
        ingredients: []
    })
}