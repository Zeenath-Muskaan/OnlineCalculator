//Display the value
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

//Clear the screen
function clearDisplay() {
    document.getElementById('display').value = ''; 
}

//Delete the last number
function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Delete the last number
}

//Calculate the square
function calculateSquare() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value * value; //Square the value
    } else {
        display.value = 'Error';
    }
}

//Calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    
    // Evaluate the expression
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

//Calculate the MODULO(%)
function calculateModulo() {
    const display = document.getElementById('display');
    const values = display.value.split('%');
    
    // If there are two numbers separated by '%', calculate the modulo
    if (values.length === 2) {
        const num1 = parseFloat(values[0]);
        const num2 = parseFloat(values[1]);
        
        if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
            display.value = num1 % num2; // Calculate modulo
        } else {
            display.value = 'Error'; // Handle invalid input
        }
    } else {
        // If the display doesn't contain a modulo operation, append '%' to the display
        display.value += '%';
    }
}