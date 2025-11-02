// 🔁 Change background color every second
setInterval(() => {
    document.querySelector(".childContainer").style.background = getRandomColor();
}, 1000);

// 🎨 Function to get a random RGB color
function getRandomColor() {
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation();
    alert("childContainer was clicked");
});

document.querySelector(".container").addEventListener("click", () => {
    alert("container was clicked");
});
