let timeoutId;

document.getElementById("startBtn").addEventListener("click", () => {
  timeoutId = setTimeout(() => {
    document.getElementById("message").textContent = "Timeout completed!";
  }, 5000);
});

document.getElementById("cancelBtn").addEventListener("click", () => {
  clearTimeout(timeoutId);
  document.getElementById("message").textContent = "Timeout canceled!";
});
