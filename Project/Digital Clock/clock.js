// console.log(now);
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

setInterval(() => {
    let now = new Date();
    let hours = now.getHours()<10 ? "0"+now.getHours() : now.getHours();
    let minutes = now.getMinutes()<10 ? "0"+now.getMinutes() : now.getMinutes();
    let seconds = now.getSeconds()<10 ? "0"+now.getSeconds() : now.getSeconds();
    // console.log(` ${hours}, ${minutes}, ${seconds}`);
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
