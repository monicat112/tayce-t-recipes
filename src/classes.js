class Ingredient {
    constructor(id, name, available) {
        this.id = id
        this.name = name
        this.available = available
    }
}

class Recipe {
    constructor(id, title, effect, ingredients=[]) {
        this.id = id
        this.title = title
        this.effect = effect
        this. ingredients = ingredients
    }
}

export { Ingredient, Recipe } 