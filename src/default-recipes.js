import uuidv4 from 'uuid/v4'
import { Ingredient, Recipe } from './classes'

const ingredient1a = new Ingredient(uuidv4(), 'Dried Fruit', false)
const ingredient1b = new Ingredient(uuidv4(), 'Strange Leaf', false)
const recipe1 = new Recipe(uuidv4(), 'Fire Flower', 'Deals 3 HP of damage to all enemies. Great addition to any boquet.', [ingredient1a, ingredient1b])

const ingredient2a = new Ingredient(uuidv4(), 'Honey Syrup', false)
const ingredient2b = new Ingredient(uuidv4(), 'Mushroom', true)
const recipe2 = new Recipe(uuidv4(), 'Honey Shroom', 'Restores 5 HP and 5 FP. Usually non hallucinogenic.', [ingredient2a, ingredient2b])

const ingredient3a = new Ingredient(uuidv4(), 'Melon', true)
const ingredient3b = new Ingredient(uuidv4(), 'Cake Mix', true)
const recipe3 = new Recipe(uuidv4(), 'Yoshi Cookie', 'Restores 15 HP and 15 FP. May contain Yoshis.', [ingredient3a, ingredient3b])

const defaultRecipes = [recipe3, recipe1, recipe2]
const getDefaultRecipes = () => defaultRecipes

export { getDefaultRecipes }