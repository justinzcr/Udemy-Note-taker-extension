chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "pauseVideo") {
      chrome.tabs.query({ url: "*://*.udemy.com/*" }, (tabs) => {
        tabs.forEach((tab) => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
              const video = document.querySelector('video');
              if (video) video.pause();
            }
          });
        });
      });
    } else if (message.action === "playVideo") {
      chrome.tabs.query({ url: "*://*.udemy.com/*" }, (tabs) => {
        tabs.forEach((tab) => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
              const video = document.querySelector('video');
              if (video) video.play();
            }
          });
        });
      });
    } else if (message.action === "rewindVideo") {
      chrome.tabs.query({ url: "*://*.udemy.com/*" }, (tabs) => {
        tabs.forEach((tab) => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
              const video = document.querySelector('video');
              if (video) video.currentTime -= 5;
            }
          });
        });
      });
    } else if (message.action === "forwardVideo") {
      chrome.tabs.query({ url: "*://*.udemy.com/*" }, (tabs) => {
        tabs.forEach((tab) => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
              const video = document.querySelector('video');
              if (video) video.currentTime += 5;
            }
          });
        });
      });
    } else if (message.action === "captureScreenshot") {
      chrome.tabs.query({ url: "*://*.udemy.com/*" }, (tabs) => {
        tabs.forEach((tab) => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
              const video = document.querySelector('video');
              const canvas = document.createElement('canvas');
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              canvas.toBlob((blob) => {
                const item = new ClipboardItem({ 'image/png': blob });
                navigator.clipboard.write([item]);
              });
            }
          });
        });
      });
    }
  });