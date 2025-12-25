// Handle Button Clicks
// Function to change the background color when a button is clicked
// Implement the function to change background color
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

// Function to reset the background color when the body is double-clicked
// Implement the function to reset background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = ""
}


// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const keyPressDisplay = document.getElementById("keyPressDisplay")
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`
  }
}

// Process Text Input

// Function to display user input in real-time
// Implement the functionon to display user input
function displayUserInput() {

  const textInput = document.getElementById("textInput")
  const textInputDisplay = document.getElementById("textInputDisplay")

  if (textInput && textInputDisplay) {
    textInputDisplay.textContent = `You typed: ${textInput.value}`
  }
}

// Attach Event Listeners
// Attach event listener to change background color when the button is clicked
function setupEventListeners() {
  const changeColorButton = document.getElementById("changeColorButton")
  const resetColorButton = document.getElementById("resetColorButton")
  const textInput = document.getElementById("textInput")

  if (changeColorButton) {

    changeColorButton.addEventListener("click", changeBackgroundColor)
  }
  // Attach event listener to reset background color when the body is double-clicked
  if (resetColorButton) {
    resetColorButton.addEventListener("dblclick", resetBackgroundColor)
  }
  // Attach event listener to display key pressed when a key is pressed down
  if (textInput) {
    textInput.addEventListener("input", displayUserInput)
  }
  document.addEventListener("keydown", displayKeyPress)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners
}