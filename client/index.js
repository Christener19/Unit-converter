let input = document.querySelector(".number-to-convert")
let convert = document.querySelector(".conversion-btn")
let lengths = document.querySelector(".length")
let liters = document.querySelector(".liters")
let masss = document.querySelector(".mass")
// let meter;
// let liter;
// let kilogram;
// let pound;
// let gallon;
// let feet;

convert.addEventListener("click", function() {
 let feet = input.value * 3.281
  let meter = input.value * 0.3048
    lengths.textContent = 
    ` ${input.value} meters = ${feet} feet |
     ${input.value} feet = ${meter} meters`
    let liter = input.value * 3.785
   let  gallon = input.value * 0.264
    liters.textContent =
    `${input.value} liters = ${gallon} gallons | ${input.value} gallons = ${liter} liters`
    let kilogram = input.value * 2.204
    let pound = input.value * 0.4535
    masss.textContent =
    `${input.value} kilos = ${kilogram} pounds | ${input.value} pounds = ${pound} kilos`
})

