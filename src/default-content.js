import uuidv4 from 'uuid/v4'
import malarkey from 'malarkey'
import { Ingredient, Recipe } from './classes'


// dialogue stuff needs its own file

const dialogueBtn = document.getElementById('dialogue-btn')


/*
 * Dialogue
 * https://github.com/yuanqing/malarkey
 * https://codepen.io/mocasalter/pen/KGJPxK
 * 
 * This all works on the assumption that hte button isn't visible while the text is running
 * 
 * There's probably a better way to do this, but I had a lot of trouble 
 * getting malarkey call()'s & onClicks to play nice together. 
 * Suggestions appreciated.
 */

const element = document.getElementById('dialogue')

const callback = (text) => {
    element.textContent = text
}

const options = {
    // typeSpeed: 30,
    typeSpeed: 1,
    deleteSpeed: 1,
    pauseDuration: 250,
    repeat: false
}

let dialogueCount = 0;

const activateStar = () => {
    console.log('do star things')
}

const m = malarkey(callback, options)

const tayceTDialogue = [
    m.type('Oh, hello there, Mario! ')
        .pause()
        .type('I’m Tayce T. ')
        .pause()
        .type('I really love to cook! ')
        .pause()
        .type('<3'),
]

// this really needs to be on the view page
dialogueBtn.addEventListener('click', () => {
    // this neeeds to be a separate function taht's called with every click
    switch (dialogueCount) {
        case 0:
            m.clear()
                .type('Would you help me update my recipe list? ')
                .pause()
                .type('I’ll make you something delicious if you do! ')
                .pause()
                .type('<3')
                .call(activateStar)
            break;
        case 1:
            m.clear()
                .type('You can edit recipes, ')
                .pause()
                .type('add new ones ')
                .pause()
                .type('or remove recipes... ')
                .pause()
                .type('if you really don’t like them.')
                .call(activateStar)
            break;
        case 2:
            m.clear()
                .type('If you make a mistake, just reset the recipes! ')
                .pause()
                .type('<3')
                .call(activateStar)
            break;
        default:
            break;
    }
    // this count isn't going up 
    dialogueCount++
})

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

export { getDefaultRecipes, imageList, tayceTDialogue }