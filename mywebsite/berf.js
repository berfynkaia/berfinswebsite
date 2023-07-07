function message() {
  alert("WRONG");
}

function getInput() {
    let userInput = prompt("Please enter your name:");
    
    if (userInput !== null && userInput !== "") {
      alert("Hello, " + userInput + "!");
    } else {
      alert("You didn't enter anything.");
    }
  }

