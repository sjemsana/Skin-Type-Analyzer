function analyzer() {
  let name = prompt("What is your name?");
  // Use parseInt() to ensure 'age' is treated as a number
  let age = parseInt(prompt("What is your age ?"));

  if (age >= 18) {
    let texture = prompt(
      "What is your skin's texture like? Smooth, Rough, Combination"
    );
    // Convert input to lowercase to simplify checking
    let concerns = prompt(
      "What are your skin concern? Acne, Oiliness, Dryness"
    ).toLowerCase();
    let tone = prompt(
      "How would you describe your skin tone? Fair, Medium, Dark"
    );
    let email = prompt("Please enter your email address.");

    // Improved logic using the concerns variable
    if (concerns === "oiliness" || concerns === "acne") {
      alert(
        `Thank you, ${name}! Your skin concerns suggest a focus on balancing and purification. Check your email for full results!`
      );
    } else if (concerns === "dryness") {
      alert(
        `Thank you, ${name}! Your skin concerns suggest a focus on deep hydration and repair. Check your email for full results!`
      );
    } else {
      // Catch-all for other inputs or "combination"
      alert(
        `Thank you for completing the quiz, ${name}! Check your emails for your personalized results.`
      );
    }
  } else {
    // Using Template Literal for clean concatenation
    alert(`Sorry ${name}, you must be 18 or older to complete the quiz.`);
  }
}

let analyzerButton = document.querySelector("button");
analyzerButton.addEventListener("click", analyzer);