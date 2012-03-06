/* File Created: March 6, 2012 */
/// <reference path="jquery-1.6..min.js" />

$().ready(function () {


  //Draw clock pointers but this time rotate the canvas rather than
  //calculate x/y start/end positions. 
  //
  //Draw hour hand
  var ie = new Image();
  ie.src = "/images/tomas.png";

  ie.onload = function () {
    draw();
  };

});

function draw() {

  var canvas = document.getElementById('clockCanvas');
  var c2d = canvas.getContext('2d');
  c2d.clearRect(0, 0, 700, 700);

//  var grad1 = c2d.createLinearGradient(0, 0, 300, 300);
//  grad1.addColorStop(0, "#D83040");
//  grad1.addColorStop(1, "#801020");

//  var grad2 = c2d.createLinearGradient(0, 0, 300, 300);
//  grad2.addColorStop(0, "#801020");
//  grad2.addColorStop(1, "#D83040");

  //  c2d.strokeStyle = grad1;
  //  c2d.lineWidth = 10;
  //  c2d.beginPath();
  //  c2d.arc(350, 350, 340, 0, Math.PI * 2, true);
  //  c2d.shadowOffsetX = 4;
  //  c2d.shadowOffsetY = 4;
  //  c2d.shadowColor = "rgba(0,0,0,0.6)";
  //  c2d.shadowBlur = 6;
  //  c2d.stroke();

  //  c2d.restore();
  //  c2d.strokeStyle = grad2;
  //  c2d.lineWidth = 10;
  //  c2d.beginPath();
  //  c2d.arc(350, 350, 330, 0, Math.PI * 2, true);
  //  c2d.stroke();
  //  c2d.strokeStyle = "#222";
  //  c2d.save();

  c2d.lineWidth = 10;
  c2d.strokeStyle = "#000";
  c2d.arc(350, 350, 10, 0, 5, true);

  c2d.translate(350, 350);

  var now = new Date();
  var hrs = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  c2d.save();
  //c2d.rotate(Math.PI / 30 * sec);

  var ie = new Image();
  ie.src = "/images/tomas.png";

  c2d.strokeStyle = "#E33";
  c2d.beginPath();
  c2d.moveTo(0, 70);
  c2d.lineTo(0, -340);
  c2d.drawImage(ie, -50, 70, 100, 100);

  c2d.save();
  c2d.font = "bold 36px sans-serif";
  c2d.rotate(-1.6);
  c2d.fillStyle = "#E33";
  c2d.fillText("Tomas", 180, 3);
  c2d.restore();

  c2d.stroke();
  c2d.restore();

  c2d.restore();

  //setTimeout(draw, 1000);
}


