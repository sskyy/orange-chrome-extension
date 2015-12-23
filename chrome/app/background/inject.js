import co from 'co';
import { exec } from '../utils';

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status !== 'loading') return;

  chrome.storage.local.get('cherry', function(obj){

    const isOn = obj.cherry && obj.cherry.isOn
    if( !isOn ) return false;

    co(function *() {




        const result = yield exec.isInjected(tabId);
        if (chrome.runtime.lastError || result[0]) return;

        exec.loadScript('inject', tabId, () => {
          console.log('load inject bundle success!');
        });

      })
    });

});
