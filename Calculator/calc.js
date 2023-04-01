let expression = '';
let result = 0;
function insertValue(value) {
    expression += value;
    document.getElementById('result').value = expression;
}
function calculate() {
    result = eval(expression);
    document.getElementById('result').value = result;
}
function clearScreen() {
    expression = '';
    result = 0;
    document.getElementById('result').value = '';
}