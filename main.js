// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
//function drawGrid() {
  // TODO: write the code of the function
////context.strokeStyle= "black";
//context.lineWidth = 2;


//context.beginPath();
//context.moveTo(0,0);
//context.lineTo(500,0);
//context.lineTo(500,500);
//context.lineTo(0,500);
//context.lineTo(0,0);
//context.stroke();
//context.closePath();

function drawGrid(x,y) {

for(let a=0; a<11; a++){
context.strokeStyle="black";
context.linewidth=2;
context.beginPath();
context.moveTo(50*a, 0);
context.lineTo(50*a, 500);
context.stroke();
context.closePath();
}

for(let b=0; b<11; b++){
context.strokeStyle="black";
context.linewidth=2;
context.beginPath();
context.moveTo(0, b*50);
context.lineTo(500, b*50);
context.stroke();
context.closePath();
}
};

drawGrid(50,100);


function drawEverything(x,y) {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything(0,0);
