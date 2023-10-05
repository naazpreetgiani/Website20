// Helper Functions

//Variables
let outputMessageEl = document.getElementById("output");

inputEl1 = document.getElementById("q1-in");
inputEl2 = document.getElementById("q2-in");
inputEl3 = document.getElementById("q3-in");
inputEl4 = document.getElementById("q4-in");
inputEl5 = document.getElementById("q5-in");

outputEl1 = document.getElementById("q1-out");
outputEl2 = document.getElementById("q2-out");
outputEl3 = document.getElementById("q3-out");
outputEl4 = document.getElementById("q4-out");
outputEl5 = document.getElementById("q5-out");

function markQuestion(qNum, correctAnswer) {
  document.getElementById(`q${qNum}-in`).value.toLowerCase();
    score = 0;
  
  //Variables
  let q1 = inputEl1.value.toLowerCase();
  let q2 = inputEl2.value.toLowerCase();
  let q3 = inputEl3.value.toLowerCase();
  let q4 = inputEl4.value.toLowerCase();
  let q5 = inputEl5.value.toLowerCase();

  if (
    qNum === correctAnswer
  ) {
    score++;
    outputEl`${qNum}`.innerHTML = "Correct!";
    inputEl`${qNum}`.style.borderColor = "green";
    outputEl`${qNum}`.style.color = "green";
  } else {
    outputEl`${qNum}`.innerHTML = "Incorrect.";
    inputEl`${qNum}`.style.borderColor = "red";
    outputEl`${qNum}`.style.color = "red";
  }
 
  //CALCULATIONS AND FEEDBACK
  let percentScoreEl = (score / 5) * 100;

  let outOfScoreEl = score;

  if (outOfScoreEl <= 2) {
    outputMessageEl.innerHTML = "Try Again.";
    outputMessageEl.style.color = "red";
  } else if (outOfScoreEl === 3) {
    outputMessageEl.innerHTML = "Not Bad!";
    outputMessageEl.style.color = "orange";
  } else if (outOfScoreEl === 4) {
    outputMessageEl.innerHTML = "Great Job!";
    outputMessageEl.style.color = "lime";
  } else {
  }

    // Output
    document.getElementById("outOfScore").innerHTML = outOfScoreEl;
    document.getElementById("percentScore").innerHTML = percentScoreEl.toFixed();
}