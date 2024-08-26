`use strict`;



const menuBtn = document.querySelector(`.menu-button`);
const navigation = document.querySelector(`.navigation`)

let clickOnBtn = 0;

menuBtn.addEventListener(`click`, () => {
    clickOnBtn++;

    if(clickOnBtn % 2 === 1) {
        navigation.classList.add(`open-nav`);
        navigation.classList.remove(`close-nav`)
    } else {
        navigation.classList.remove(`open-nav`);
        navigation.classList.add(`close-nav`)
    }
})