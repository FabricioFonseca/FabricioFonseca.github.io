var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagens/brasao2.jpg') {
      myImage.setAttribute ('src','imagens/morumbi2.jpg');
    } else {
      myImage.setAttribute ('src','imagens/brasao2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'SPFC is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'SPFC is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }