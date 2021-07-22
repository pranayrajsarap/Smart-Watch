var dispTime = document.getElementById("disp-time");

function displayTime()
{
    var today = new Date();
    //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var time = today.toLocaleTimeString();
    document.getElementById("disp-time").innerHTML = time;
}
setInterval( displayTime,1000);





var image = document.getElementById('Image');

/*var black = getElementById('black');
black.addEventListener('click',function(){
    image.src = "black.png"});

var blue = document.getElementById('blue');
blue.addEventListener('click',function(){
    image.src = "blue.png"});*/

var black = document.getElementById('black');
black.addEventListener('click', function(){
    image.src = "black.png";
})

var blue = document.getElementById('blue');
blue.addEventListener('click', function(){
    image.src = "blue.png";
})

var pink = document.getElementById('pink');
pink.addEventListener('click', function(){
    image.src = "pink.png";
})

var purple = document.getElementById('purple');
purple.addEventListener('click', function(){
    image.src = "purple.png";
})

var heartRate = document.getElementById('heart');

heartRate.addEventListener('click',function(){
    
});