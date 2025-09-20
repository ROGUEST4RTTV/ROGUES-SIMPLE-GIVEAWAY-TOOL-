let names = [];

function addEntry() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();
  if (name) {
    names.push(name);
    updateEntries();
    input.value = "";
  }
}

function updateEntries() {
  document.getElementById("entries").innerHTML =
    "<strong>Entries:</strong> " + (names.length ? names.join(", ") : "None");
}

function pickWinner() {
  if (names.length === 0) {
    alert("No entries yet!");
    return;
  }

  const winnerDiv = document.getElementById("winner");
  let rollTime = 5000; // rolling duration in ms
  let intervalTime = 100; // change name every 100ms
  let elapsed = 0;

  winnerDiv.classList.remove("pulse"); // remove animation if previously applied

  const rollInterval = setInterval(() => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    winnerDiv.innerText = "🎉 Rolling: " + randomName + " 🎉";
    elapsed += intervalTime;

    if (elapsed >= rollTime) {
      clearInterval(rollInterval);
      const finalWinner = names[Math.floor(Math.random() * names.length)];
      winnerDiv.innerText = "🎉 Winner: " + finalWinner + " 🎉";
      // Trigger pop & pulse animation
      void winnerDiv.offsetWidth; // force reflow
      winnerDiv.classList.add("pulse");
    }
  }, intervalTime);
}