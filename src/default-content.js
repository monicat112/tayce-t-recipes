import uuidv4 from 'uuid/v4'
import { Ingredient, Recipe, Image } from './classes'

// Images
const imageList = [
    new Image('Fire Flower'),
    new Image('Honey Shroom'),
    new Image('Yoshi Cookie'),
    new Image('Cake'),
    new Image('Yummy Meal'),
    new Image('Deluxe Feast'),
    new Image('Tasty Tonic'),
    new Image('Jelly Pop'),
    new Image('Egg Missile'),
    new Image('Mistake')
]

// Fire Flower
const ingredient1a = new Ingredient(uuidv4(), 'Dried Fruit', false)
const ingredient1b = new Ingredient(uuidv4(), 'Strange Leaf', false)
const fireFlowerImage = imageList.find((image) => image.name === 'Fire Flower')
const fireFlower = new Recipe(uuidv4(), 'Fire Flower', 'Deals 3 HP of damage to all enemies. Great addition to any boquet.', [ingredient1a, ingredient1b])
// const fireFlower = new Recipe(uuidv4(), 'Fire Flower', fireFlowerImage, 'Deals 3 HP of damage to all enemies. Great addition to any boquet.', [ingredient1a, ingredient1b])

// Honey Shroom
const ingredient2a = new Ingredient(uuidv4(), 'Honey Syrup', false)
const ingredient2b = new Ingredient(uuidv4(), 'Mushroom', true)
const honeyShroomImage = imageList.find((image) => image.name === 'Honey Shroom')
const honeyShroom = new Recipe(uuidv4(), 'Honey Shroom', 'Restores 5 HP and 5 FP. Usually non hallucinogenic.', [ingredient2a, ingredient2b])
// const honeyShroom = new Recipe(uuidv4(), 'Honey Shroom', honeyShroomImage, 'Restores 5 HP and 5 FP. Usually non hallucinogenic.', [ingredient2a, ingredient2b])

// Yoshi Cookie
const ingredient3a = new Ingredient(uuidv4(), 'Melon', true)
const ingredient3b = new Ingredient(uuidv4(), 'Cake Mix', true)
const yoshiCookieImage = imageList.find((image) => image.name === 'Yoshi Cookie')
const yoshiCookie = new Recipe(uuidv4(), 'Yoshi Cookie', 'Restores 15 HP and 15 FP. May contain Yoshis.', [ingredient3a, ingredient3b])
// const yoshiCookie = new Recipe(uuidv4(), 'Yoshi Cookie', yoshiCookieImage, 'Restores 15 HP and 15 FP. May contain Yoshis.', [ingredient3a, ingredient3b])

// Default Recipes
const defaultRecipes = [yoshiCookie, fireFlower, honeyShroom]
const getDefaultRecipes = () => defaultRecipes

export { getDefaultRecipes }