import malarkey from 'malarkey'

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
    typeSpeed: 30,
    deleteSpeed: 1,
    pauseDuration: 250,
    repeat: false
}

const m = malarkey(callback, options)

const activateStar = (starCallback) => {
    console.log('do star things')
    starCallback()
}

const tayceTDialogue = (dialogueCount, tCallback) => {
    tCallback(m.isStopped())
    // this works great! but we need to cancel the counter going up if it returns
    if (!m.isStopped()) {
        console.log('stopped 2')
        return
    }
    switch (dialogueCount) {
        case 0: 
            m.clear()
                .type('Oh, hello there, Mario! ')
                .pause()
                .type('I’m Tayce T. ')
                .pause()
                .type('I really love to cook! ')
                .pause()
                .type('<3')
            break;
        case 1:
            console.log('case 1')
            m.clear()
                .type('Would you help me update my recipe list? ')
                .pause()
                .type('I’ll make you something delicious if you do! ')
                .pause()
                .type('<3')
                .call(activateStar)
            break;
        case 2:
            console.log('case 2')
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
        case 3:
            console.log('case 3')
            m.clear()
                .type('If you make a mistake, just reset the recipes! ')
                .pause()
                .type('<3')
                .call(activateStar)
            break;
        default:
            break;
    }
}

export { tayceTDialogue }