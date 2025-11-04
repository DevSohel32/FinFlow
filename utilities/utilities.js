function getInputElementById(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextById(id) {
    const value = document.getElementById(id);
    const convertedValue = parseFloat(value.innerText);
    return convertedValue;
}

function getInnerTextByIdAndValue(id, value) {
    document.getElementById(id).innerText = value;

}
function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}