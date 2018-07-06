//Include a listening event for runtime.onInstalled
chrome.runtime.onInstalled.addListener(function(){

  //Set a value using storage API
  chrome.storage.sync.set({color: '#3951a7'}, function(){
    console.log("The color is blue!");
  });

  //Add declared rules using declarativeContent API
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
    chrome.declarativeContent.onPageChanged.addRules([{
      //PageStateMatcher matches webpages only if all listed criteria are met
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
    ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
