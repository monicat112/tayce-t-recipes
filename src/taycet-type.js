import malarkey from 'malarkey'

/*
 * Tayce T's Dialogue
 *
 * https://github.com/yuanqing/malarkey
 * https://codepen.io/mocasalter/pen/KGJPxK
 */

let dialogueCount = 0
const dialogueBtn = document.getElementById('dialogue-btn')
const dialogueBtnImg = document.getElementById('dialogue-btn-img')
const dialogueEL = document.getElementById('dialogue')
const callback = (text) => dialogueEL.textContent = text

const options = {
    typeSpeed: 30,
    deleteSpeed: 1,
    pauseDuration: 250,
    repeat: false
}

const m = malarkey(callback, options)

const activateDialogueBtn = (callback) => {
    dialogueBtn.disabled = false
    callback() // need this for malarkey to work
}

const tayceTDialogue = () => {
    dialogueBtn.disabled = true

    if (dialogueCount > 3) {
        dialogueBtnImg.setAttribute('src', './images/mario-star.svg')
        dialogueCount = 0
    } else if (dialogueCount > 2) { 
        dialogueBtnImg.setAttribute('src', './images/redo.svg')
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
                .call(activateDialogueBtn)
            break;
        case 1:
            m.clear()
                .type('Would you help me update my recipe list? ')
                .pause()
                .type('I’ll make you something delicious if you do! ')
                .pause()
                .type('<3')
                .call(activateDialogueBtn)
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
                .call(activateDialogueBtn)
            break;
        case 3:
            m.clear()
                .type('If you make a mistake, just reset the recipes! ')
                .pause()
                .type('<3')
                .call(activateDialogueBtn)
            break;
        default:
            break;
    }

    dialogueCount++
}

export { tayceTDialogue }