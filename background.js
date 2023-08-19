let activeGmailTabId = null;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.includes("mail.google.com") && changeInfo.status === 'complete') {
        // If we already have an active Gmail tab, and it's different from the new one
        if (activeGmailTabId !== null && activeGmailTabId !== tabId) {
            // Optional: Send a message to the previous Gmail tab to stop the script
            chrome.tabs.sendMessage(activeGmailTabId, { action: "stopScript" });
        }
        activeGmailTabId = tabId;
    }
});

chrome.tabs.onRemoved.addListener((tabId) => {
    if (activeGmailTabId === tabId) {
        activeGmailTabId = null;
    }
});
