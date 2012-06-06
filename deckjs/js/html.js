$(function() {
  drawStructure();
});

function drawStructure() {
  var c=document.getElementById("structure_canvas");
  var cxt=c.getContext("2d");
  cxt.font = "35px Arial";
  //cxt.fillStyle="#FF0000";
  cxt.strokeRect(200,0,200,85);
  cxt.fillText("JavaScript", 220, 55);
  cxt.strokeRect(680,0,200,85);
  cxt.fillText("CSS", 740, 55);
  cxt.strokeRect(440,260,200,85);
  cxt.fillText("(X)HTML", 465, 310);
  cxt.beginPath();
  //top line
  cxt.moveTo(680,45);
  cxt.lineTo(640,55);
  cxt.lineTo(640,35);
  cxt.fill();
  cxt.moveTo(400,45);
  cxt.lineTo(640,45);
  cxt.stroke();
  
  //left line
  cxt.moveTo(540, 260);
  cxt.lineTo(325, 102);
  cxt.stroke();
  cxt.moveTo(300, 85);
  cxt.lineTo(325, 115);
  cxt.lineTo(340, 97);
  cxt.fill();
  
  //right line
  cxt.moveTo(540, 260);
  cxt.lineTo(738, 116);
  cxt.stroke();
  cxt.moveTo(770, 85);
  cxt.lineTo(729, 108);
  cxt.lineTo(749, 125);
  cxt.fill();
}