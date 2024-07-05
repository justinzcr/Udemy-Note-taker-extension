document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === ',') {
      chrome.runtime.sendMessage({ action: "rewindVideo" });
    } else if (event.ctrlKey && event.key === '.') {
      chrome.runtime.sendMessage({ action: "forwardVideo" });
    } else if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
      if (event.code === 'Space') {
        event.preventDefault();
        chrome.runtime.sendMessage({ action: "playVideo" });
      } else if (event.code === 'KeyS' && event.code === 'KeyS' && event.code === 'KeyD' && event.code === 'KeyT') {
        chrome.runtime.sendMessage({ action: "captureScreenshot" });
      }
    }
  });
  
  document.addEventListener('focusin', function(event) {
    if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
      chrome.runtime.sendMessage({ action: "pauseVideo" });
    }
  }); 