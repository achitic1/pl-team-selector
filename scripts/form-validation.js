/* Checks that the user answered all questions when they click the submit button */
document.querySelector("form").addEventListener("submit", (e) => {
  const questions = document.querySelectorAll("fieldset");
  let isValid = true;

  questions.forEach((question) => {
    const inputs = question.querySelectorAll(`input[type="radio"]`);
    let hasAnswer = false;
    inputs.forEach((input) => {
      if (input.checked) {
        hasAnswer = true;
      }
    });
    if (!hasAnswer) {
      isValid = false;
    }
  });

  if (!isValid) {
    e.preventDefault();
    alert("Please answer all of the questions before submitting");
  }
});

