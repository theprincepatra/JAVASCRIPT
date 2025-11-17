let button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    button.style.backgroundColor = getRandomColor();
});

// function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const red = r.toString(16).padStart(2, '0');  // .toString() → Converts something (usually a number) into a string to which base you want.
  const green = g.toString(16).padStart(2, '0');
  const blue = b.toString(16).padStart(2, '0');

  return `#${red}${green}${blue}`;
}
