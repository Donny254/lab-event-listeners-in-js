// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  changeColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
  });
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  resetBackgroundColor.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
  });
  resetButton.addEventListener('dblclick', resetBackgroundColor);
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const keyPressDisplay = document.getElementById('keyPressDisplay');
  keyPressDisplay.textContent = `You pressed: ${event.key}`;

}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the functionon to display user input
  const textInput = document.getElementById('textInput');
  const textInputDisplay = document.getElementById('textInputDisplay');

  textInputDisplay.textContent = `You Typed: ${textInput, value}`

}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
  const changeColorButton = document.getElementById('changeColorButton');
  const resetColorButton = document.getElementById('resetColorButton')
  const textInput = document.getElementById('textInput');

  if (changeColorButton) {

    changeColorButton.addEventListener('click', changeBackgroundColor)
  }
  // Attach event listener to reset background color when the body is double-clicked
  if (resetColorButton) {
    resetColorButton.addEventListener('dblclick', resetBackgroundColor)
  }
  // Attach event listener to display key pressed when a key is pressed down
  if(textInput){
    textInput.addEventListener("input",displayUserInput)
  }
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}