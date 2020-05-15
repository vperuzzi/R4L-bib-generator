var bibCanvas = document.getElementById('bibCanvas');
var bibctx = bibCanvas.getContext('2d');
var certCanvas = document.getElementById('certCanvas');
var certctx = certCanvas.getContext('2d');
var img = new Image();
var img2 = new Image();

document.getElementById('bibGen').onclick = function() {
  doBib();
  doCert();
};

function init() {
  img.onload = function() {
    bibCanvas.width = img.width;
    bibCanvas.height = img.height;
    bibctx.drawImage(img, 0, 0);
  };
  img.src = "images/bib.jpg";

  img2.onload = function() {
    certCanvas.width = img2.width;
    certCanvas.height = img2.height;
    certctx.drawImage(img2, 0, 0);
  };
  img2.src = "images/certificate.jpg";
}

function doBib() {
  bibctx.clearRect(0, 0, bibCanvas.width, bibCanvas.height);
  bibctx.drawImage(img, 0, 0);
  var number = Math.floor((Math.random() * 90000) + 10000);
  var name = document.getElementById("last_name").value;
  bibctx.font = '50px sans-serif';
  bibctx.textAlign = 'center';
  bibctx.fillText(name.toUpperCase(), bibCanvas.width / 2, bibCanvas.height / 2 - 85);
  bibctx.font = '300px sans-serif';
  bibctx.fillText(number.toString(), bibCanvas.width / 2, bibCanvas.height / 2 + 175);
}

function doCert() {
  certctx.clearRect(0,0, certCanvas.width, certCanvas.height);
  certctx.drawImage(img2, 0, 0);
  var first = document.getElementById("first_name").value;
  var last = document.getElementById("last_name").value;
  certctx.font = "100px sans-serif";
  certctx.textAlign = 'center';
  certctx.fillText(first.toUpperCase(), certCanvas.width/2, certCanvas.height/2 + 75);
  certctx.fillText(last.toUpperCase(), certCanvas.width/2, certCanvas.height/2 + 175);
}

init();
