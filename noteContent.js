let isTyping = false;
let spacePressCount = 0;

document.addEventListener('keydown', function(event) {
  if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
    if (event.code === 'Space') {
      spacePressCount++;
      if (spacePressCount === 2) {
        spacePressCount = 0;
        chrome.runtime.sendMessage({ action: "playVideo" });
      }
    } else {
      spacePressCount = 0;
      isTyping = true;
      chrome.runtime.sendMessage({ action: "pauseVideo" });
    }
  }
});

document.addEventListener('focusin', function(event) {
  if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
    isTyping = true;
    chrome.runtime.sendMessage({ action: "pauseVideo" });
  }
});

document.addEventListener('focusout', function(event) {
  if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
    isTyping = false;
  }
});