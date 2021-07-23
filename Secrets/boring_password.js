var password = "Python";

input = prompt("Please enter the Password for this Site.");

if (input == null || input != password) {
    if (input == null) {
        alert("Nothing was entered. Returning to Home Page...");
    } else {
        alert("Incorrect Password was entered. Returning to Home Page...");
    }
    window.location.href="https://ex0tic-python.github.io/";
} else if (input == password) {
    alert("Correct Password entered. Continuing...");
}
