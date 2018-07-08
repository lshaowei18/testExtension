let input = document.getElementById('name');

input.onkeyup = function(){
  let greeting = document.getElementById('greet');
  greeting.innerHTML = 'Hello ' + input.value;   
}
