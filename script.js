function generate(){
    var length = prompt("How many characters would you like your password to contain?")
        if(length < 8){
            alert("Password length must be at least 8 characters")
        }else if (length > 8) {
            confirm("Click OK to confirm including special characters.")
            confirm("Click OK to confirm including numbers.")
            confirm("Click OK to confirm including letters.")
        }
        


    let complexity = document.getElementById("slider").value;
    let values = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    let password = "";
    for (var i = 0; i < length; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));

    }
    console.log(password)
    document.getElementById("display").value = password;

}

function copy(){
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Copied");
}
