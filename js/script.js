$("button").click(function() {
  let user = $(".input").val();
   $(".userChoice").text(user);
  let randomNumber = 0;
  let computerChoice = Math.ceil(Math.random() * 3);
  $(".computerChoice").text(computerChoice);
  
  if (randomNumber === 1) {
    $(".computerChoice").text("Rock");
}
  else if(randomNumber === 2){
  $(".computerChoice").text("Paper");
}
  else if(randomNumber ===3){
    $(".computerChoice").text("Scissors");
  }
 $(".computerChoice").text(computerChoice);
  //Add a click handler that saves the value of the user's input to a variable
[ ] Display the user input value on the screen, in the user choice location