function getRandomBgColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.getElementById('bg-color-generator').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomBgColor();
});










