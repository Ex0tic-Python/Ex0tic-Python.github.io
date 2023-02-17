// Konami code :p
const key_code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
let key_streak = 0;

function on_key_press(event) {
    if (event.key == key_code[key_streak]) {
        key_streak = key_streak + 1;
        if (key_streak == 11) {
            document.removeEventListener("keydown", on_key_press);
            document.getElementById("cover").remove();
        }
    } else {
        key_streak = 0;
    }
}

document.addEventListener("keydown", on_key_press);


const titleTag = document.querySelector("header");
const charArr = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~`!@#$%^&*()-_=+[{]}|;:',<.>/?");

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
    cycChar(".char_" + String(i+1), finalChars[i], durationArr[randRange(0, 9)] * 1000)
}
