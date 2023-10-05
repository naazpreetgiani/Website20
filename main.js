// WEBSITE PROJECT BY NAAZPREET GIANI

//BUTTON EVENT LISTENER
document.getElementById("btn").addEventListener("click", calculateScore);

function calculateScore() {
  //Set score to zero
  let score = 0;

  //Process
  score += markQuestion(1, "stephen curry" );
  score += markQuestion(2, "james naismith");
  score += markQuestion(3,  "dribbling");
  score += markQuestion(4, "travel" );
  score += markQuestion(5,  "bottom");
}