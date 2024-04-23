const generateButton = document.querySelector("#btn");
const copyIcon = document.querySelector(".ri-file-copy-line");
const lengthInput = document.querySelector("#lengthofpassword");
const passwordField = document.querySelector("#password");


generateButton.addEventListener("click", generatePassword )
copyIcon.addEventListener("click", copyPassword)

function generatePassword() {
   
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/~`";
    let password = ""
    let lengthp = length();

    for(let i=0; i<lengthp; i++){

        let randomIndex = Math.floor(Math.random() * charset.length)
        password += charset[randomIndex];
    }

    console.log(password);
    passwordField.value = password
   
}

// for taking the length of the password
function length(params) {
    let length = Number(lengthInput.value);
    console.log(length)
    return length;
}

function copyPassword(params) {

    passwordField.select();
    passwordField.setSelectionRange(0,99999);

    document.execCommand("copy");
    alert("copied the text" + passwordField.value);
    
}
