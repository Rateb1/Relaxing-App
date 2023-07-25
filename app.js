const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
breathAnimation();

function breathAnimation() {
    text.innerHTML = "Breath-In!";
    container.className = "container grow";

    setTimeout(() => {
        text.innerHTML = "Hold";

        setTimeout(() => {
            text.innerHTML = "Breathe-Out!";
            container.className = "container shrink";
        }, holdTime)
    }, breathTime)
}

setInterval(breathAnimation, totalTime);






document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.getElementById("stars-container");

    function createStar() {
        const star = document.createElement("i");
        star.classList.add("star", "fas", "fa-star");
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vw";
        star.style.color = getRandomColor();

        starsContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1300);
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    setInterval(createStar, 200);
});
