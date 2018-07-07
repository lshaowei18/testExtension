let changeColor = document.getElementById('changeColor');

//Get color from storage and apply it to the button
chrome.storage.sync.get('color', function(data){
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

// //Adds an onclick event on the button that triggers a programatically injected content
// //turns the background color of the page to the same changeColor
changeColor.onclick = function(element){
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor= "' + color + '";'});
    });
};
