
# Building a Recipe App

https://www.udemy.com/modern-javascript/learn/v4/t/lecture/9954590?start=0

## Storing Recipes
You're going to have an array of objects where each object represents a recipe

Each recipe object will have:
* An ID
* Title
* Instructions (body)
* Ingredients - An array of objects

## Page Structure

Home Page
* Search bar that filters as you type
* List of recipes
    * Text indicating if you have all, some or none of the ingredients
* Add recipe button

Recipe Detail Page
* Url hash with recipe ID
* Input for Title
* Textarea for instructions
* Ingredients checkboxes
* Delete recipe button

## Ideas
* [Paper Mario Theme](https://www.mariowiki.com/List_of_Tayce_T._recipes)
* [Tayce T. Sprites](https://www.spriters-resource.com/fullview/106157/)
* [Button - flatten sides on hover](https://codepen.io/ashleynolan/pen/djpCG)

### About page
```html
<h1>About</h1>
<p>I hope you enjoyed the Tayce T. recipies!</p>
<p>This project was built with &gt;3 using Webpack, Babel, ES6 JavaScript (look Ma, no jQuery!), Sass and <a href="https://surge.sh/" arget="_blank">Surge</a> for super simple hosting. If you want to take a look under the hood, <a href="#" target="_blank">here's the repo</a>.</p>
<p>If you'd like to get in touch with me, tweet me @mocasalter ✌</p>
```