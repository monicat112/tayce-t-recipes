class Ingredient {
    constructor(id, name, available) {
        this.id = id
        this.name = name
        this.available = available
    }
}

class Recipe {
    constructor(id, title, effect, ingredients=[]) {
    // constructor(id, title, image, effect, ingredients=[]) {
        this.id = id
        this.title = title
        // this.image = image
        this.effect = effect
        this.ingredients = ingredients
    }
}

class Image {
    constructor(name) {
        this.name = name
    }
    fileNameBase() {
        return this.name.replace(' ', '-').toLowerCase()
    }
    get fileName () {
        const newName = this.fileNameBase()
        return `${newName}.png`
    }
    get fileName3x () {
        const newName = this.fileNameBase()
        return `${newName}_3x.png`
    }
}

export { Ingredient, Recipe, Image } 