# Tayce T. Recipes

`$ npm run dev-server` to run the dev environment  
`$ npm i -g surge` to install the surge CLI globally, otherwise build won't work  
`$ npm run build` to compile and push live to the [surge](https://surge.sh/) url defined in package.json

## Features

* Default recipe content
* Image selection
* Typing text effect using Malarkey

## Todo

* ~~Placeholder color~~
* ~~Button styles~~
* ~~Logo~~
* ~~Home search bar~~
* ~~Home recipe card spacing~~
* ~~Recipe cards - move link inside~~
* Auto-reload if the app is open in multiple tabs
    * This isn't working... the local data is changing but the stuff on the page isn't
* Anti button outline script, only shows for tabbing
* Don't allow adding ingredient without input first
* Speech bubble background
* Speech bubble button

Autoreloading: See notes-app index.js
```javascript
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes()
    }
})
```