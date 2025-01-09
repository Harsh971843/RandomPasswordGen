const passwordBox = document.querySelector("#password");
let length = 14;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowecase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special_characters = "!@#$%^&*()_+=-";

let allchar = uppercase + lowecase + numbers + special_characters ;
function createPassword(){
    let password1 = " ";
    password1  += uppercase[Math.floor(Math.random() * uppercase.length)]; // Add a random Upper case
    password1 += lowecase[Math.floor(Math.random() * lowecase.length)];
    password1  += numbers[Math.floor(Math.random() * numbers.length)];
    password1  +=  special_characters[Math.floor(Math.random() * special_characters.length)];

    while(password1.length < length) {
        password1 += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passwordBox.value = password1;
}
function copypassword(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}