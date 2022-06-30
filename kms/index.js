var dot = new Audio("morse_dot_0125.wav");
var dash = new Audio("morse_dash_05.wav");


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


dot.play();
sleep(125);
dash.play();
sleep(500);
