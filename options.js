let page = document.getElementById('buttonDiv');

//Four color options provided; when button is clicked it updates the color value
// in the extension's global storage

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors){
  //loop through the button colors
  for(let item of kButtonColors){
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function(){
      chrome.storage.sync.set({color: item}, function(){
        console.log('color is ' + item);
      })
    });
    page.appendChild(button);
  }
}

constructOptions(kButtonColors);
