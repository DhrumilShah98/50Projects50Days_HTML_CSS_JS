const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
var stepNumber = 1;

const getProgressWidth = (stepNumber) => {
    return ((stepNumber - 1) / (circles.length - 1) * 100) + "%";
}

const addActiveClass = (stepNumber) => {
    progress.style.width = getProgressWidth(stepNumber);
    circles[stepNumber - 1].classList.add('active');
};

const removeActiveClass = () => {
    progress.style.width = getProgressWidth(stepNumber);
    circles[stepNumber].classList.remove('active');
};

prevBtn.addEventListener('click', () => {
    stepNumber--;
    removeActiveClass(stepNumber);
    if (stepNumber == 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
});

nextBtn.addEventListener('click', () => {
    stepNumber++;
    addActiveClass(stepNumber);
    if (stepNumber == circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
});