import uuidv4 from 'uuid/v4'
import malarkey from 'malarkey'
import { Ingredient, Recipe } from './classes'

// Dialogue
const tayceTDialogue = {
    dialogueGreeting(callback, options) {
        malarkey(callback, options)
            .type('Oh, hello there, Mario! ')
            .pause()
            .type('I’m Tayce T. ')
            .pause()
            .type('I really love to cook! ')
            .pause()
            .type('<3')
    },
    dialogueRequest(callback, options) {
        malarkey(callback, options)
            .type('Would you help me update my recipe list? ')
            .pause()
            .type('I’ll make you something delicious if you do! ')
            .pause()
            .type('<3')
    },
    dialogueInstructions(callback, options) {
        malarkey(callback, options)
            .type('You can edit recipes, ')
            .pause()
            .type('add new ones ')
            .pause()
            .type('or remove recipes... ')
            .pause()
            .type('if you really don’t like them.')
    },
    dialogueMistake(callback, options) {
        malarkey(callback, options)
            .type('If you make a mistake, just reset the recipes! ')
            .pause()
            .type('<3')
    }
}

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

// Default Recipes
const defaultRecipes = [yoshiCookie, fireFlower, honeyShroom]
const getDefaultRecipes = () => defaultRecipes

export { getDefaultRecipes, imageList, tayceTDialogue }