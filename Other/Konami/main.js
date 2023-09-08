let streak = 0;

let progress = "";
let missing_progress = "";

for (let i=0; i < streak; i++) {
    progress += "█";
}
for (let i=0; i < 11 - streak; i++) {
    missing_progress += " ";
}
console.log(missing_progress);

let final_box = "┌───────────┐<br>│" + progress + missing_progress + "│<br>└───────────┘";

document.getElementById("konami_tag").innerHTML = final_box;
