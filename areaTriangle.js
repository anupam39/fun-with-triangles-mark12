const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-area");
const output = document.querySelector("#output");

function calculateAreaOfTriangle(){
    const area = 0.5 * Number(sides[0].value) * Number(sides[1].value);
    output.innerText = "The Area of the triangle is " +area+ "square cm";
}

calculateBtn.addEventListener("click" , calculateAreaOfTriangle);