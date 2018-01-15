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