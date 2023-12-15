let currentInput = "";

function appendNumber(number) {
  // Memastikan tidak ada lebih dari satu desimal titik dalam angka saat ini
  if (number === "." && currentInput.includes(".")) {
    return;
  }
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function deleteLastEntry() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    // Mengganti operator pangkat (^) dengan ** untuk kalkulasi eksponen
    currentInput = currentInput.replace(/\^/g, "**");

    // Evaluasi ekspresi matematika
    let result = eval(currentInput);

    // Menentukan jumlah digit desimal yang diinginkan
    let precision = 10;

    // Mengalikan dengan 10^x, di mana x adalah jumlah digit desimal yang diinginkan
    result = result * Math.pow(10, precision);

    // Membulatkan hasil
    result = Math.round(result);

    // Membagi dengan 10^x untuk mendapatkan hasil desimal dengan presisi
    result = result / Math.pow(10, precision);

    currentInput = result;
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}
