const inputAngle = document.querySelectorAll(".input-angle");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputAngle[0].value), Number(inputAngle[1].value), Number(inputAngle[2].value));
    if (sumOfAngles === 180) {
        outputBox.innerText = "Yay!! the angles form a triangle.";
    }
    else {
        outputBox.innerText = "Uh oh, the angles don't form a triangle.";
    }
}


checkBtn.addEventListener("click", isTriangle);