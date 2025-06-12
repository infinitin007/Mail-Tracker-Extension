// content.js
console.log("📡 Gmail Pixel Tracker content script active");

function tryInjectAll() {
  // Find every open compose body
  document
    .querySelectorAll('div[aria-label="Message Body"]')
    .forEach(bodyDiv => {
      // Skip if we already injected here
      if (bodyDiv.dataset.trackerInjected) return;
      bodyDiv.dataset.trackerInjected = "true";

      // Build a unique ID
      const uniqueId = Date.now() + "-" + Math.floor(Math.random() * 10000);
      console.log(`🛠 Injecting pixel for ID: ${uniqueId}`);

      // Create the 1×1 pixel
   
