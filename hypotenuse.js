const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse");
const output = document.querySelector("#output");

function calculateSumOfSides(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSides(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = "The hypotenuse is " + lengthOfHypotenuse;
}

calculateBtn.addEventListener("click" , calculateHypotenuse);