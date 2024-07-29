const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
    const firstQuestion = document.querySelector("fieldset");
    firstQuestion.classList.remove("hidden");
;});

let currQuestion = 0;

function checkSelection() {
    const form = document.querySelector("form");
    const question = form.children[currQuestion];
    const radioButtons = question.querySelectorAll(`input[type="radio"]`);
    const isSelected = Array.from(radioButtons).some(button => button.checked);

    if (isSelected) {
        form.children[currQuestion + 1].classList.remove("hidden");
        currQuestion += 1;
    }
    requestAnimationFrame(checkSelection);
}

requestAnimationFrame(checkSelection);

