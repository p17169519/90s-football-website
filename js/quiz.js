let btn = document.querySelector(".button");

function totalScore() {

  let total = 0;
  let question1 = document.quiz.q1.value;
  let question2 = document.quiz.q2.value;
  let question3 = document.quiz.q3.value;
  let question4 = document.quiz.q4.value;
  let question5 = document.quiz.q5.value;
  let question6 = document.quiz.q6.value;
  let score = document.getElementById('score');
  let quiz = document.getElementById('quiz');

  if (question1 == "Tottenham Hotspur") {
    total++
  }
  if (question2 == "George Graham") {
    total++
  }
  if (question3 == "Ossie Ardiles") {
    total++
  }
  if (question4 == "Newcastle") {
    total++
  }
  if (question5 == "Norwich") {
    total++
  }
  if (question6 == "Manchester United") {
    total++
  }
  quiz.style.display = "none";
  score.style.display = "flex";
  score.textContent="You scored " + `${total}`;
}

btn.addEventListener("click", totalScore);
