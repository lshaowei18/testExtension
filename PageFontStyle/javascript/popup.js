var input = document.getElementById("fontColor");
var color = document.getElementById('fontColor').value;
var btn = document.getElementById('btnChange');

//Detect changes to the input
var eventList = ["change", "paste", "keyup"]; //Array for events

//Event function
var eventHandler = function(){
  color = input.value;
  console.log(color);
}

//Loop through list of events
eventList.forEach(event => input.addEventListener(event, eventHandler));

//Add listener to button
btn.addEventListener("click", function(){
  console.log("clicked");
  chrome.tabs.query({active:true, currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {todo:"changeColor", clickedColor: color});
    console.log("sent!");
  });
});
