# Tayce T. Recipes

`$ npm run dev-server` to run the dev environment  
`$ npm i -g surge` to install the surge CLI globally, otherwise build won't work  
`$ npm run build` to compile and push live to the [surge](https://surge.sh/) url defined in package.json

## Features

* Default recipe content
* Image selection
* Typing text effect using Malarkey

### Quirks
* Any images that are used via CSS need to be included in the public/images folder AND the src/images folder. Otherwise webpack crashes.

## Todo

* ~~Placeholder color~~
* ~~Button styles~~
* ~~Logo~~
* ~~Home search bar~~
* ~~Home recipe card spacing~~
* ~~Recipe cards - move link inside~~
* ~~Anti button outline script, only shows for tabbing~~
* ~~Don't allow adding ingredient without input first~~
* ~~Speech bubble background https://stackoverflow.com/a/38989739/2811272~~
* Speech bubble button
* Auto-reload if the app is open in multiple tabs
    * This isn't working... the local data is changing but the stuff on the page isn't. See notes-app index.js for reference.

## Todo Bonus
* Animate search icon on focus
* Animate ingredient images
* Unbutton reset active state
* Animate Tayce T