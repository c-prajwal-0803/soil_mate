const API = "";

function show(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// Crop Suggestions
function getCropSuggestions() {
  const form = new FormData();
  form.append("location", location.value);
  form.append("area", area.value);
  form.append("water", water.value);
  form.append("soilFile", soilFile.files[0]);

  fetch(API + "/crop-suggestions", {
    method: "POST",
    body: form
  })
  .then(r => r.json())
  .then(d => cropResult.innerText = d.result);
}

// Crop Health
function getCropHealth() {
  const form = new FormData();
  form.append("image", cropImage.files[0]);

  fetch(API + "/crop-health", {
    method: "POST",
    body: form
  })
  .then(r => r.json())
  .then(d => healthResult.innerText = d.result);
}

// Cultivation
function getCultivation() {
  fetch(API + "/cultivation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ crop: cultCrop.value })
  })
  .then(r => r.json())
  .then(d => cultResult.innerText = d.result);
}

// Expenses
function getExpenses() {
  fetch(API + "/expenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ crop: expCrop.value })
  })
  .then(r => r.json())
  .then(d => expResult.innerText = d.result);
}
