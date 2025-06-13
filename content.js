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
      const img = document.createElement('img');
      img.src = `https://327f-2401-4900-7c0f-fe11-3411-f930-aa44-6def.ngrok-free.app/pixel?uid=${uniqueId}`;
      img.width = 1;
      img.height = 1;
      img.style.opacity = '0.001';  // invisible but not stripped
      img.alt = '';

      // Insert it at the end of the body
      bodyDiv.appendChild(img);
      console.log(`✅ Pixel injected for ID: ${uniqueId}`);
    });
}

// Try injection every 2 seconds
setInterval(tryInjectAll, 2000);