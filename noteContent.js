let isTyping = false;
let spacePressCount = 0;

document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
    if (event.code === 'Space') {
      spacePressCount++;
      if (spacePressCount === 2) {
        console.log('Spacebar pressed');
        spacePressCount = 0;
        chrome.runtime.sendMessage({ action: "playVideo" });
      }
    } else {
      console.log('Typing detected');
      spacePressCount = 0;
      isTyping = true;
      chrome.runtime.sendMessage({ action: "pauseVideo" });
    }
  }
});

document.addEventListener('focusin', function(event) {
    console.log('Focus in:', event.target.tagName);
    if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
    isTyping = true;
    chrome.runtime.sendMessage({ action: "pauseVideo" });
  }
});

document.addEventListener('focusout', function(event) {
    console.log('Focus out:', event.target.tagName);
    if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
    isTyping = false;
  }
});