
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(120,120);
ctx.lineTo(200, 0);
ctx.strokeStyle = "red";
ctx.stroke();