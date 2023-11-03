function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elememtId) {
    const textElement = document.getElementById(elememtId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
function setTextElementValueById(elememtId, newValue) {
    const textElement = document.getElementById(elememtId);
    textElement.innerText = newValue;
}