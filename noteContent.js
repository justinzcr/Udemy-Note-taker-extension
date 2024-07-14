let spacePressCount = 0;

document.addEventListener('keydown', function(event) {
  console.log("Key down in note-taking tab:", event.key);

  if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
    if (event.code === 'Space') {
      spacePressCount++;
      if (spacePressCount === 2) {
        spacePressCount = 0;
        try {
          chrome.runtime.sendMessage({ action: "playVideo" }, (response) => {
            console.log("Play video message sent");
          });
        } catch (error) {
          console.error("Error sending playVideo message:", error);
        }
      }
    } else {
      spacePressCount = 0;
      try {
        chrome.runtime.sendMessage({ action: "pauseVideo" }, (response) => {
          console.log("Pause video message sent");
        });
      } catch (error) {
        console.error("Error sending pauseVideo message:", error);
      }
    }
  }
});

document.addEventListener('focusin', function(event) {
  console.log("Focus in on element:", event.target.tagName);

  if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
    try {
      chrome.runtime.sendMessage({ action: "pauseVideo" }, (response) => {
        console.log("Pause video message sent");
      });
    } catch (error) {
      console.error("Error sending pauseVideo message:", error);
    }
  }
});
