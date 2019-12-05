var upperCase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var confirmSpecial;
var confirmNumbers;
var confirmUpper;
var confirmLower;
var generateBtn = document.getElementById("button1")

//Generate function
generateBtn.addEventListener("click", function () {
    var length = prompt("How many characters would you like your password to contain?")
    if (length < 8) {
        var length = alert("Password length must be between 8 and 128 characters")

    }

    // var length = prompt("How many characters would you like your password to contain?")
    if (length >= 8) {
        confirmSpecial = confirm("Click OK to confirm including special characters.")
        confirmNumbers = confirm("Click OK to confirm including numbers.")
        confirmUpper = confirm("Click OK to confirm including upper case letters.")
        confirmLower = confirm("Click OK to confirm including lower case letters")

        var newString = "";
        if (confirmSpecial === true) {
            newString += special
        };
        if (confirmNumbers === true) {
            newString += numbers
        };
        if (confirmUpper === true) {
            newString += upperCase
        };
        if (confirmLower === true) {
            newString += lowerCase
        }

        console.log(newString);

        let password = "";
        for (var i = 0; i < length; i++) {
            password = password + newString.charAt(Math.floor(Math.random() * Math.floor(newString.length - 1)));

        }
        document.getElementById("display").value = password;
        console.log(password)
    }
});

//Copy function
function copy() {
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Your password has been copied!");
}
