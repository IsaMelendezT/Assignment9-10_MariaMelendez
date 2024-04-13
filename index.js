const canvas = document.getElementById('main');

let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0,0,canvas.width, canvas.height);

let drawColor = "black";
console.log(drawColor);
let drawWidth = "2";
let isDrawing = false;

/*Function to change the color of the pen when it is clicked*/
function changeColor(element){
    drawColor = window.getComputedStyle(element).getPropertyValue('background-color');
}

let colorBtns = document.querySelectorAll(".btn-color");

colorBtns.forEach(element => {
    console.log(element)
    element.addEventListener('click', function(){
        changeColor(element); 
        console.log(drawColor);
    })
    
})

/*Create even listener to all movements of the mouse*/
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('mouseup', stop, false);
canvas.addEventListener('mouseout', stop, false);

/*Function to indicate drawing has started*/
function start(e){
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    e.preventDefault();
}

/*Function to draw when mouse move */
function draw(e){
    if(isDrawing){
        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.strokeStyle = drawColor;
        context.lineWidth = drawWidth;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
    e.preventDefault();
}

/*Function to stop drawing */
function stop(event){
    if(isDrawing){
        context.stroke();
        context.closePath();
        isDrawing = false;
    }
    event.preventDefault();
}