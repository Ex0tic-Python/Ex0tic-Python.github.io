// Import Statement: import {cycCharsMain} from "path/to/script";

// Includes the max. If given 1 and 3 then it can pick 1, 2, and 3
function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

/**
* charIDAmount - The amount of characters to cycle. If you have a 9 letter word to cycle, pass the int 9. All char ID's should follow the convention "cyc_char_{num}" starting at 1

* endCharArr - An array with all the ending characters should the cycle end at some point. Should not contain spaces and should be the same length as the charIDAmount. null can only be passed if durationArr is also null.

* durationArr - An array with int's or floats which will decide how long a character cycles for. Should null be passed it will cycle indefenitly.
*/
export function cycCharsMain(charIDAmount, endCharArr, durationArr) {
    for (let i = 1; i <= charIDAmount; i++) {
        cycChar("cyc_char_" + String(i), endCharArr, durationArr)
    }
}