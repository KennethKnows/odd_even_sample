function checkOddEven() {
    let numbersInput = document.getElementById("numbers").value;
    let numbersArray = numbersInput.split(",").map(number => parseFloat(number.trim()));
  
    let result = "";
    
    for (let i = 0; i < numbersArray.length; i++) {
      let a = numbersArray[i];
      if (isNaN(a) || !Number.isInteger(a)) {
        result = "Please Input valid numbers.";
        break;
      } else if (a % 2 === 0) {
        result += `${a} is even.\n`;
      } else {
        result += `${a} is odd.\n`;
      }
    }
  
    let resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
}

function clearForm() {
    document.getElementById("numbers").value = ""; // Reset the input field
    document.getElementById("result").textContent = ""; // Clear the result
}