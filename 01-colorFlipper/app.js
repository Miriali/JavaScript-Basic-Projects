const colors = ["crimson", "GoldenRod", "PowderBlue", "rgba(133,122,200)", "rgba(120, 255, 0)", "#20B2AA", "#DB7093"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    // get random number between 0 - 3 colors[0]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}