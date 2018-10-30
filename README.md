# Tayce T. Recipes

`$ npm run dev-server` to run the dev environment  
`$ npm i -g surge` to install the surge CLI globally, otherwise build won't work  

`$ npm run build` to compile and push live to the [surge](https://surge.sh/) url defined in package.json

## Features

* Default recipe content
* Image selection
* Typing text effect using Malarkey
* Auto-reloading data on all open tabs

## Todo

* ~~Favicon~~
* Tayce T svg needs to scale better at mobile
    * Can't set it as a linked <img> becuase then the png doesn't load in...
    * Might need to do a ratio hack? https://css-tricks.com/aspect-ratios-svg/
* Put code on github
* Add links to about
* Fix up Twitter

## Todo Bonus
* Browsertest
* CSS autoprefixing with webpack