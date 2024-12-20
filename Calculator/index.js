const display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function appendValue(value) {
  display.value += value;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "error";
  }
}
function deleteLast() {
  display.value = display.value(0, -1);
}
