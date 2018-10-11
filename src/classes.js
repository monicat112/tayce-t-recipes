class Ingredient {
    constructor(id, name, available) {
        this.id = id
        this.name = name
        this.available = available
    }
}

class Recipe {
    constructor(id, title, image, effect, ingredients=[]) {
        this.id = id
        this.title = title
        this.image = image
        this.effect = effect
        this.ingredients = ingredients
    }
}

// Couldn't get this to work :/ I was't able to retrieve the fileName info where I needed it for some reason
// class Image {
//     constructor(name) {
//         this.name = name
//     }
//     get fileName() {
//         const nameBase = this.name.replace(' ', '-').toLowerCase()
//         return `${nameBase}.png`
//     }
// }

export { Ingredient, Recipe } 