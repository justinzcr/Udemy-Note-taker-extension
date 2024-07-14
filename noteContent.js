let spacePressCount = 0;

document.addEventListener('keydown', function(event) {
  console.log("Key down in note-taking tab:", event.key);
  
  if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
    if (event.code === 'Space') {
      spacePressCount++;
      if (spacePressCount === 2) {
        spacePressCount = 0;
        chrome.runtime.sendMessage({ action: "playVideo" });
      }
    } else {
      spacePressCount = 0;
      chrome.runtime.sendMessage({ action: "pauseVideo" });
    }
  }
});

document.addEventListener('focusin', function(event) {
  console.log("Focus in on element:", event.target.tagName);
  
  if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
    chrome.runtime.sendMessage({ action: "pauseVideo" });
  }
});