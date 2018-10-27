import uuidv4 from 'uuid/v4'
import { Ingredient, Recipe } from './classes'

// Images - see classess.js for potential improvement
const imageList = [
    {
        name: 'Yummy Meal',
        fileName: 'yummy-meal'
    },
    {
        name: 'Fire Flower',
        fileName: 'fire-flower'
    },
    {
        name: 'Honey Shroom',
        fileName: 'honey-shroom'
    },
    {
        name: 'Yoshi Cookie',
        fileName: 'yoshi-cookie'
    },
    {
        name: 'Cake',
        fileName: 'cake'
    },
    {
        name: 'Tasty Tonic',
        fileName: 'tasty-tonic'
    },
    {
        name: 'Jelly Pop',
        fileName: 'jelly-pop'
    },
    {
        name: 'Egg Missile',
        fileName: 'egg-missile'
    },
    {
        name: 'Deluxe Feast',
        fileName: 'deluxe-feast'
    },
    {
        name: 'Mistake',
        fileName: 'mistake'
    }
]

// Fire Flower
const ingredient1a = new Ingredient(uuidv4(), 'Dried Fruit', false)
const ingredient1b = new Ingredient(uuidv4(), 'Strange Leaf', false)
const fireFlowerImage = imageList.find((image) => image.name === 'Fire Flower')
const fireFlower = new Recipe(uuidv4(), 'Fire Flower', fireFlowerImage, 'Deals 3 HP of damage to all enemies. Great addition to any bouquet.', [ingredient1a, ingredient1b])

// Honey Shroom
const ingredient2a = new Ingredient(uuidv4(), 'Honey Syrup', false)
const ingredient2b = new Ingredient(uuidv4(), 'Mushroom', true)
const honeyShroomImage = imageList.find((image) => image.name === 'Honey Shroom')
const honeyShroom = new Recipe(uuidv4(), 'Honey Shroom', honeyShroomImage, 'Restores 5 HP and 5 FP. Usually non hallucinogenic.', [ingredient2a, ingredient2b])

// Yoshi Cookie
const ingredient3a = new Ingredient(uuidv4(), 'Melon', true)
const ingredient3b = new Ingredient(uuidv4(), 'Cake Mix', true)
const yoshiCookieImage = imageList.find((image) => image.name === 'Yoshi Cookie')
const yoshiCookie = new Recipe(uuidv4(), 'Yoshi Cookie', yoshiCookieImage, 'Restores 15 HP and 15 FP. May contain Yoshis.', [ingredient3a, ingredient3b])

// Mistake
const ingredient4a = new Ingredient(uuidv4(), 'Dried Shroom', false)
const ingredient4b = new Ingredient(uuidv4(), 'Cake Mix', true)
const mistakeImage = imageList.find((image) => image.name === 'Mistake')
const mistake = new Recipe(uuidv4(), 'Shroom Souffle?', mistakeImage, 'Deals 3 HP of damage... to you.', [ingredient4a, ingredient4b])

// Default Recipes
const defaultRecipes = [yoshiCookie, fireFlower, honeyShroom, mistake]
const getDefaultRecipes = () => defaultRecipes

export { getDefaultRecipes, imageList }