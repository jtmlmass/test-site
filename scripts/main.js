function multiply(num1,num2){
    var result = num1 * num2
    return result;
}

multiply(4,7);
multiply(20,20);
multiply(0.5,3);

document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/safari.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}