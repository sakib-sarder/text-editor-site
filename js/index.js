const textArea = document.getElementById('text-area');
document.getElementById('bold').addEventListener('click', function () {
    textArea.style.fontWeight = 'bold';
});
document.getElementById('italic').addEventListener('click', function () {
    textArea.style.fontStyle = 'italic';
});
document.getElementById('under-line').addEventListener('click', function () {
    textArea.style.textDecoration = 'underline';
});
document.getElementById('text-left').addEventListener('click', function () {
    textArea.style.textAlign = 'left';
});
document.getElementById('text-center').addEventListener('click', function () {
    textArea.style.textAlign = 'center';
});
document.getElementById('text-justify').addEventListener('click', function () {
    textArea.style.textAlign = 'justify';
});

document.getElementById('text-right').addEventListener('click', function () {
    textArea.style.textAlign = 'right';
});

// font size
document.getElementById('font-size').addEventListener('keyup', function (event) {
    const fontSizeInputElement = document.getElementById('font-size');
    const fontSizeValueString = fontSizeInputElement.value;
    const fontSizeValue = parseFloat(fontSizeValueString);
    if (event.key === 'Enter') {
        textArea.style.fontSize = fontSizeValue + 'px';
    }
});

// color
document.getElementById('text-color').addEventListener('click', function () {
    const colorElement = document.getElementById('text-color');
    const colorValue = colorElement.value;
    textArea.style.color = colorValue;
});
