document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === ',') {
      chrome.runtime.sendMessage({ action: "rewindVideo" });
    } else if (event.ctrlKey && event.key === '.') {
      chrome.runtime.sendMessage({ action: "forwardVideo" });
    }
  });  