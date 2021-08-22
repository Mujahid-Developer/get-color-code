const box = document.getElementById("box");
const colorCode = document.getElementById("color-code");

const changeHandler = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = '#' + randomColor;
    colorCode.innerText = '#' + randomColor;
    console.log("click")
}
const getColorCode = () => {
    navigator.clipboard.writeText(colorCode.innerText);
}