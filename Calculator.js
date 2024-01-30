const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
   
    if (output.includes("/0")) {
      output = "Error";
    } else {
      // Calculate the result
      output = Number(eval(output.replace("%", "/100")));
      
      
      if (output % 1 !== 0) {
        output = output.toFixed(2);
      } else {
        output = String(output);
      }
    }

    display.value = output;
    output = ""; // Clear the output after calculation
  } else if (btnValue === "AC") {
    output = "";
    display.value = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
    display.value = output; // Update display after deletion
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
    display.value = output; // Update display for other button presses
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
