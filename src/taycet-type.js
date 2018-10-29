import malarkey from 'malarkey'

/*
 * Tayce T's Dialogue
 *
 * https://github.com/yuanqing/malarkey
 * https://codepen.io/mocasalter/pen/KGJPxK
 */

let dialogueCount = 0
const starBtn = document.getElementById('dialogue-btn')
const starBtnImg = document.getElementById('dialogue-btn-img')
const element = document.getElementById('dialogue')
const callback = (text) => element.textContent = text

const options = {
    typeSpeed: 1,
    deleteSpeed: 1,
    pauseDuration: 250,
    repeat: false
}

const m = malarkey(callback, options)

const btnImageStar = () => {
    starBtnImg.setAttribute('src', './images/mario-star.svg')
}

const btnImageRedo = () => {
    starBtnImg.setAttribute('src', './images/redo.svg')
}

const activateStar = (starCallback) => {
    starBtn.disabled = false
    if (dialogueCount > 3) {
        btnImageRedo()
    }
    starCallback()
}

const tayceTDialogue = () => {
    starBtn.disabled = true

    if (dialogueCount > 3) {
        dialogueCount = 0
        btnImageStar()
    }

    // if the text isn't done typing, stop button clicks from doing anything
    if (!m.isStopped()) {
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
                .call(activateStar)
            break;
        case 1:
            m.clear()
                .type('Would you help me update my recipe list? ')
                .pause()
                .type('I’ll make you something delicious if you do! ')
                .pause()
                .type('<3')
                .call(activateStar)
            break;
        case 2:
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
            m.clear()
                .type('If you make a mistake, just reset the recipes! ')
                .pause()
                .type('<3')
                .call(activateStar)
            break;
        default:
            break;
    }

    dialogueCount++
}

export { tayceTDialogue }