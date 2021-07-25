const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

console.log("Hello");

poll.displayResults = function (type = "array") {
  if (type === "array") {
    console.log(this.answers);
  } else if (type === "string") {
    console.log(
      `Poll results are ${this.userAnswer[0]}, ${this.userAnswer[1]}, ${this.userAnswer[2]}, ${this.userAnswer[3]}`
    );
  }
};

poll.registerNewAnswer = function () {
  const userAnswer = prompt(
    "What is your favorite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++"
  );

  if (
    Number(userAnswer) === 1 ||
    Number(userAnswer) === 3 ||
    Number(userAnswer) === 2 ||
    Number(userAnswer) === 4
  ) {
    this.answers[userAnswer] += 1;
  } else {
    alert("Please enter a valid option number");
  }
  this.displayResults();
};
//const displ

document
  .querySelector("button")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
//poll.registerNewAnswer();
