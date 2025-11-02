let count = 0;

// Run this every 1 second (1000 ms)
let intervalId = setInterval(() => {
  count++;
  document.getElementById("countDisplay").textContent = "Count: " + count;

  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);
