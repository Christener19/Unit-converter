/*
CONVERSION NUMBERS:   
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let input = document.querySelector(".number-to-convert")
let convert = document.querySelector(".conversion-btn")
let lengths = document.querySelector(".length")
let liters = document.querySelector(".liters")
let masss = document.querySelector(".mass")
let meter;
let liter;
let kilogram;
let pound;
let gallen;
let feet;

convert.addEventListener("click", function() {
    feet = input.value * 3.281
    meter = input.value * 0.3048
    lengths.textContent = 
    ` ${input.value} meters = ${feet} feet |
     ${input.value} feet = ${meter} meters`
})

