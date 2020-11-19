// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
context.strokeStyle= "black";
context.lineWidth = 2;


context.beginPath();
context.moveTo(0,0);
context.lineTo(500,0);
context.lineTo(500,500);
context.lineTo(0,500);
context.lineTo(0,0);
context.stroke();
context.closePath();



for(let x=0; x<11; x++){
context.strokeStyle="black";
context.linewidth=2;
context.beginPath();
context.moveTo(50*x, 0);
context.lineTo(50*x, height);
context.stroke;
context.closePath();


};

for(let y=0; y>11; y++){
context.strokeStyle="black";
context.linewidth=2;
context.beginPath();
context.moveTo(0, y*50);
context.lineTo(width, y*50);
context.stroke;
context.closePath();
};
console.log("test");
}



//drawGrid(0,0);

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();