chrome.storage.local.get('cherry', (obj) => {
    chrome.browserAction.setBadgeText({ text:  obj.cherry.isOn ? 'on' : 'off' });
});


chrome.browserAction.onClicked.addListener(function (){
    chrome.storage.local.get('cherry', (obj) => {
        const cherry = obj.cherry || {}
        cherry.isOn = !cherry.isOn
        chrome.storage.local.set({ cherry}, function(){
            console.log(arguments)
            chrome.browserAction.setBadgeText({ text:  cherry.isOn ? 'on' : 'off' });
        })
    });
})