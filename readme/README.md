# password-generator

## Summary
This page was designed to generate a new password with a specific requirement such as special characters, numbers, lower case and upper case letters. It also has a copy function to copy the password from the clipboard. The layout is responsive with any screen size and devices.

## Techonologies Used
- Bootstrap - used to create components in a faster pace.
- CSS - used to style the layout of the page.
- GitHub - used to push and commit the page.
- Javascript - used to implement complex things on web pages.

## Site Picture
![Site](readme/password.png)

## Code Snippet
```html
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
```


## Author Links
[LinkedIn](www.linkedin.com/in/tu-tai-le-2a9646139)
[GitHub](https://github.com/TaiLe96)