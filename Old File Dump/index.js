import {cycCharsMain} from "/Global-Scripts/js/cycle_chars.js";


function redirect(link, newTab = false) {
    if (newTab === false) {
        window.open(link, "_self");
    } else {
        window.open(link);
    }
}
/*
function cycChar(charClass, endChar, duration = null) {
    // Functions I'll pass
    function cyc() {
        const char = titleTag.querySelector(charClass);
        char.textContent = charArr[randRange(0, 101)];
    }
    function endCyc(inter) {
        clearInterval(inter);
        const char = titleTag.querySelector(charClass);
        char.textContent = endChar;
    }

    const cycCharInter = setInterval(cyc, 100);
    if (!(duration === null)) {
        setTimeout(endCyc, duration, cycCharInter);
    }
}


for (let i = 0; i <= 19; i++) {
    cycChar(".head_char_" + String(i+1), finalChars[i], durationArr[randRange(0, 6)] * 1000)
}
*/
cycCharsMain(19, Array.from("WelcomeToMyWebsite!"), [1, 1.2, 1.7, 2, 2.1, 2.7, 2.9, 3, 3.5, 4]);