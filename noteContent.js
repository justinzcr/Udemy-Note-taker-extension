document.addEventListener('keydown', function(event) {
    if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
      if (event.code === 'Space') {
        chrome.runtime.sendMessage({ action: "playVideo" });
      } else if (event.key === 's' && event.key === 's' && event.key === 'd' && event.key === 't') {
        chrome.runtime.sendMessage({ action: "captureScreenshot" });
      }
    }
  });
  
  document.addEventListener('focusin', function(event) {
    if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
      chrome.runtime.sendMessage({ action: "pauseVideo" });
    }
  });  