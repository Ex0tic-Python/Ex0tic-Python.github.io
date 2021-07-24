var password = "Python";
var unknown_response = "Unknown Error occured. Returning to Home Page...\nError-0: Unknown Error occured";
var null_response = "Request Denied. Returning to Home Page...\nError-1: User denied Request\nResponse: None";
var empty_response = "Nothing was entered. Returning to Home Page...\nError-2: User gave no response\nResponse: ";
var incorrect_response = "Incorrect Password was entered. Returning to Home Page...\nError-3: User entered incorrect Password\nResponse: ";
var correct_response = "Correct Password recieved. Entering page...";

input = prompt("Please enter the Password to continue.\n(Hint In case I forget: My favorite programming Language)");

if (input == password) {
    alert(correct_response);
} else {
    if (input == null) {
        alert(null_response);
    } else if (input == "") {
        alert(empty_response);
    } else if (input != password) {
        alert(incorrect_response + input);
    } else {
        alert(unknown_response);
    }
    window.location.href="https://ex0tic-python.github.io/";
}
