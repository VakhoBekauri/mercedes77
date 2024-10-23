// configurator.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-config");
  const modelSelect = document.getElementById("model-select");
  const featureSunroof = document.getElementById("feature-sunroof");
  const featureLeatherSeats = document.getElementById("feature-leather-seats");
  const featurePremiumSound = document.getElementById("feature-premium-sound");
  const configResult = document.getElementById("config-result");

  submitButton.addEventListener("click", function () {
    // Get selected model
    const selectedModel = modelSelect.value;

    // Collect selected features
    const selectedFeatures = [];
    if (featureSunroof.checked) selectedFeatures.push("Sunroof");
    if (featureLeatherSeats.checked) selectedFeatures.push("Leather Seats");
    if (featurePremiumSound.checked) selectedFeatures.push("Premium Sound System");

    // Display the configuration result
    configResult.innerHTML = `<h3>Your Configuration:</h3>
      <p>Model: ${selectedModel}</p>
      <p>Features: ${selectedFeatures.length > 0 ? selectedFeatures.join(", ") : "None"}</p>`;
  });
});
