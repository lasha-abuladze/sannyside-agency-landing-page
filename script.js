`use strict`;



const menuBtn = document.querySelector(`.menu-button`);
const navigation = document.querySelector(`.navigation`)
const body = document.body

let clickOnBtn = 0;

menuBtn.addEventListener(`click`, () => {
    clickOnBtn++;

    if(clickOnBtn % 2 === 1) {
        navigation.classList.add(`open-nav`);
        navigation.classList.remove(`close-nav`)
        body.classList.toggle(`no-scroll`)
    } else {
        navigation.classList.remove(`open-nav`);
        navigation.classList.add(`close-nav`);
        body.classList.remove(`no-scroll`)
    }
})