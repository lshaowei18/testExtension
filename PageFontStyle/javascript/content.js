var titles = document.getElementsByClassName("li");
console.log(titles);
console.log("content.js loaded!");
chrome.runtime.sendMessage({todo: "showPageAction"});

//Listen for message to changecolor from popup.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  console.log("received!");
  if (request.todo == "changeColor"){
    var addColor = '#' + request.clickedColor;
    // titles.forEach(function(title){
    //   title.style.fontStyle = "italic";
    //   title.style.color = addColor;
    // });
    for (var i = 0; i < titles.length; i++){
      titles[i].style.fontStyle = "italic";
      titles[i].style.color = addColor;
      console.log("Color listener worked!");
      console.log(addColor);
      console.log(titles[i]);
    }
  }
})
