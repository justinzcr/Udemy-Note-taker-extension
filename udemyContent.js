document.addEventListener('keydown', function(event) {
  console.log("Key down in Udemy tab:", event.key);
  
  if (event.ctrlKey && event.key === ',') {
    chrome.runtime.sendMessage({ action: "rewindVideo" });
  } else if (event.ctrlKey && event.key === '.') {
    chrome.runtime.sendMessage({ action: "forwardVideo" });
  }
});