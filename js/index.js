const $numberButtons = document.querySelectorAll(
  ".calculator__buttons--number"
);
const $operatorButtons = document.querySelectorAll(
  ".calculator__buttons--operator"
);
const $inputGetNumbers = document.querySelector(".calculator__display-input");
const $equalsButton = document.querySelector(".calculator__buttons--equals");
const $result = document.querySelector(".calculator__display-result");
const $clean = document.querySelector(".clean")
const $plusMinus = document.querySelector(".plus-minus")
const $History = document.querySelector(".history")

let calculate = "";
let plusMinus = "";


$numberButtons.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;

    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});

$operatorButtons.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});

$plusMinus.addEventListener("click", function() {
  
  let verifyNegative = $inputGetNumbers.value.includes("-")
  if (verifyNegative == false) {
    $inputGetNumbers.value = $inputGetNumbers.value.replace(" ", "")
    $inputGetNumbers.value = "-"+$inputGetNumbers.value 
  } else {
    $inputGetNumbers.value = $inputGetNumbers.value.replace("-", "")
  }
})

$equalsButton.addEventListener("click", function () {
  calculate = calculate.replaceAll("X", "*");
  calculate = calculate.replaceAll("÷", "/");
  $result.textContent = eval(calculate);
});

$clean.addEventListener("click", function() {
  $inputGetNumbers.value = "";
  $result.textContent = "";
  calculate = "";
})


