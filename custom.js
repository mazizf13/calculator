// Clear
document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector("#display").value = " ";
});

// BackSpace Function
const backSpace = () => {
  const num = document.querySelector("#display").value.slice(0, -1);
  document.querySelector("#display").value = num;
};

// Function to handle number input
const handleNumber = (number) => {
  if (document.querySelector("#display").value == " ") {
    document.querySelector("#display").value = number;
  } else {
    document.querySelector("#display").value += number;
  }
};

// One function
const one = () => {
  handleNumber("1");
};

// Two function
const two = () => {
  handleNumber("2");
};

// Three function
const three = () => {
  handleNumber("3");
};

// Four function
const four = () => {
  handleNumber("4");
};

// Five function
const five = () => {
  handleNumber("5");
};

// Six function
const six = () => {
  handleNumber("6");
};

// Seven function
const seven = () => {
  handleNumber("7");
};

// Eight function
const eight = () => {
  handleNumber("8");
};

// Nine function
const nine = () => {
  handleNumber("9");
};

// Zero function
const zero = () => {
  handleNumber("0");
};

// Point function
const point = () => {
  handleNumber(".");
};
