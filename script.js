
let resultHistory = [];

document.getElementById("freeRechargeBtn").onclick = () => {
  alert("₹100 Free Recharge Added!");
};

function submitResult() {
  const color = document.getElementById("color").value;
  const number = document.getElementById("number").value;
  const bigSmall = document.getElementById("bigSmall").value;

  const result = `${color.toUpperCase()} - ${number} - ${bigSmall.toUpperCase()}`;
  showPopup(result);
  addToHistory(result);
}

function showPopup(text) {
  const popup = document.getElementById("result-popup");
  const resultText = document.getElementById("resultText");

  resultText.textContent = text;
  popup.classList.remove("hidden");

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 3000);
}

function addToHistory(text) {
  resultHistory.unshift(text);
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = resultHistory.map(item => `<li>${item}</li>`).join('');
}

