const hexValues = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`A`,`B`,`C`,`D`,`E`,`F`]


const color = document.querySelector("#color-code");
const btn_change = document.querySelector("#change-btn");
const color_Area = document.querySelector("section");

btn_change.addEventListener("click",function () {
    let hexColorCode =`#`+getRandomHexString(6);
    console.log(hexColorCode);
    color_Area.style.backgroundColor = hexColorCode
    color.textContent = "background Color: "+ hexColorCode   


})


function getRandomHex(){
    const hexValuesIndex = Math.floor(Math.random()* hexValues.length);

    let randomHexValue = hexValues[hexValuesIndex];
    return randomHexValue;
}

function getRandomHexString(stringlength){

    let hexString = ''
    for(var i=0; i<stringlength; i++){
        hexString += getRandomHex();
    }
    return hexString;
}