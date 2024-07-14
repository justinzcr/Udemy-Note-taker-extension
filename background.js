chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received in background:", message);

  if (message.action === "pauseVideo") {
    chrome.tabs.query({ url: "*://*.udemy.com/*" }, (tabs) => {
      console.log("Pausing video in Udemy tabs:", tabs);
      tabs.forEach((tab) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            console.log("Pausing video");
            const video = document.querySelector('video');
            if (video) video.pause();
          }
        });
      });
    });
  } else if (message.action === "playVideo") {
    chrome.tabs.query({ url: "*://*.udemy.com/*" }, (tabs) => {
      console.log("Playing video in Udemy tabs:", tabs);
      tabs.forEach((tab) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            console.log("Playing video");
            const video = document.querySelector('video');
            if (video) video.play();
          }
        });
      });
    });
  }
});
