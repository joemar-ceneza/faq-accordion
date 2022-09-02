const questions = document.querySelectorAll(".faq-accordion-questions-container");

questions.forEach(function (question) {
  const btn = question.querySelector(".arrow-down");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-answer");
        item.classList.remove("font-weights");
      }
    });
    question.classList.toggle("show-answer");
    question.classList.toggle("font-weights");
  });
});