/* File Created: March 6, 2012 */
/// <reference path="jquery-1.6..min.js" />

var moveTomToPosition = -0.1;
var tomCurrentPosition = -0.1;

var moveChetnaToPosition = 0;
var chetnaCurrentPosition = -Math.PI / 5 + 0.1;

$().ready(function () {

  //Draw clock pointers but this time rotate the canvas rather than
  //calculate x/y start/end positions. 
  //
  //Draw hour hand
  var ie = new Image();
  ie.src = "/images/tomas.png";

  ie.onload = function () {

    ie2 = new Image();
    ie2.src = "/images/chetna.png";

    ie2.onload = function () {
      draw();
    }

  };

});

function draw() {

  var canvas = document.getElementById('clockCanvas');
  var c2d = canvas.getContext('2d');
  c2d.clearRect(0, 0, 700, 700);

  c2d.font = "bold 36px sans-serif";

  c2d.save();
  c2d.translate(350, 350);
  c2d.rotate(Math.PI / 5);
  c2d.fillText("HOME", -50, -320);
  c2d.restore();

  c2d.save();
  c2d.translate(350, 350);
  c2d.rotate(-Math.PI / 5);
  c2d.fillText("OTHER", -50, -320);
  c2d.restore();

  c2d.save();
  c2d.translate(350, 350);
  c2d.rotate(0);
  c2d.fillText("WORK", -50, -320);
  c2d.restore();

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

  c2d.save();
  c2d.translate(350, 350);

  if (tomCurrentPosition < (moveTomToPosition)) {
    tomCurrentPosition += 0.01
  }
  else {
    tomCurrentPosition == moveTomToPosition;
  }
  c2d.rotate(tomCurrentPosition);

  var ie = new Image();
  ie.src = "/images/tomas.png";

  c2d.lineWith = 8;
  c2d.strokeStyle = "#333";
  c2d.beginPath();
  c2d.moveTo(0, 70);
  c2d.lineTo(0, -310);
  c2d.stroke();
  c2d.drawImage(ie, -50, 70, 100, 100);

  c2d.save();
  c2d.font = "bold 36px sans-serif";
  c2d.rotate(-1.6);
  c2d.fillStyle = "#333";
  c2d.fillText("Tomas", 180, 3);
  c2d.restore();

  c2d.restore();

  // CHETNA

  c2d.save();
  c2d.translate(350, 350);
  if (chetnaCurrentPosition < (moveChetnaToPosition + 0.03)) {
    chetnaCurrentPosition += 0.01
  }
  else {
    chetnaCurrentPosition == moveChetnaToPosition;
  }
  c2d.rotate(chetnaCurrentPosition);

  var ie = new Image();
  ie.src = "/images/chetna.png";

  c2d.strokeStyle = "#E33";
  c2d.beginPath();
  c2d.moveTo(0, 120);
  c2d.lineTo(0, -310);
  c2d.stroke();
  c2d.drawImage(ie, -50, 120, 106, 120);

  c2d.save();
  c2d.font = "bold 36px sans-serif";
  c2d.rotate(-1.6);
  c2d.fillStyle = "#E33";
  c2d.fillText("Chetna", 180, 3);
  c2d.restore();

  c2d.restore();

  c2d.restore();

  setTimeout(draw, 10);
}