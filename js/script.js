var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var img = new Image();


document.getElementById('bibGen').onclick = function() {
  doBib();
};

function init() {
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  };
  img.src = "images/bib.jpg";
}

function doBib() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
  var number = Math.floor((Math.random() * 90000) + 10000);
  var name = document.getElementById("name").value;
  ctx.font = '50px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height / 2 - 100);
  ctx.font = '300px sans-serif';
  ctx.fillText(number.toString(), canvas.width / 2, canvas.height / 2 + 175);
}

init();
