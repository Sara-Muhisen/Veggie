
var img = document.querySelector('img');

var images = [
    'images/hero01.jpg',
    'images/hero02.jpg'
];


function getRandomImage(){
    var randomNum = Math.floor(Math.random() * images.length);
    img.src = images[randomNum];
}

setInterval(getRandomImage,2000);


