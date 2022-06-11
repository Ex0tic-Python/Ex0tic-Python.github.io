const titleTag = document.querySelector("header");
let charStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~`!@#$%^&*()-_=+[{]}|;:',<.>/?";
const charArr = Array.from(charStr);

function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function cycChar(charClass, endChar, duration) {

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
    setTimeout(endCyc, duration, cycCharInter);
}

let finalCharsStr = "WelcomeToMyWebsite!";
const finalChars = Array.from(finalCharsStr);

const durationArr = [1, 1.2, 1.7, 2, 2.1, 2.7, 2.9, 3, 3.5, 4]

for (let i = 0; i <= 19; i++) {
    cycChar(".head_char_" + String(i+1), finalChars[i], durationArr[randRange(0, 9)] * 1000)
}
