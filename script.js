// background setup of choices
let lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = [1,2,3,4,5,6,7,8,9,0];
let symbols = ["!","@","#","$","%","^","&","*","(",")","~"];

// event listener for button click
document.querySelector("#genPass").addEventListener('click', function (event){
    // prevent page from reloading
    event.preventDefault();
    
    // set up the choices for the generator based on which checkboxes are checked
    charChoices = {}
    let numChoiceCat=0;
    if (document.querySelector("#lowercase").checked){
        charChoices[numChoiceCat] = lowerCaseLetters;
        numChoiceCat++;
    }
    if (document.querySelector("#uppercase").checked){
        charChoices[numChoiceCat] = upperCaseLetters;
        numChoiceCat++;
    }
    if (document.querySelector("#numbers").checked){
        charChoices[numChoiceCat] = numbers;
        numChoiceCat++;
    }
    if (document.querySelector("#symbols").checked){
        charChoices[numChoiceCat] = symbols;
        numChoiceCat++;
    }
    if (numChoiceCat == 0){
        alert("Must select at least 1 option!")
    }
    
    // password length field
    let passLen = document.querySelector("#passLength").value;
    if (!passLen){
        alert("must define a length for your password!");
    }
    
    if ( passLen > 128 ){
        passLen = 128;
    }

    // character selection
    let count = 0;
    let outPass = "";
    while (count < passLen){
        // random for which set or arrays
        let charType = Math.floor(Math.random() * Math.floor(numChoiceCat));
        // add another random for the array element
        let charIndex = Math.floor(Math.random() * Math.floor(charChoices[charType].length));
        outPass += charChoices[charType][charIndex];
        count += 1;
    }

    // display the resulting password
    document.querySelector("#resultingPassword").innerHTML = outPass;
}
);

document.getElementById("lowercase").checked = true;
document.getElementById("uppercase").checked = true;
document.getElementById("numbers").checked = true;
document.getElementById("symbols").checked = true;