const questions = document.querySelectorAll(".faq-accordion-questions-container");

questions.forEach(function (question) {
  const btn = question.querySelector(".faq-accordion-questions");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-answer");
      }
    });
    question.classList.toggle("show-answer");
  });
});