
let board
let balls

function setup() {

	createCanvas(windowWidth, windowHeight);

	board = new Board(windowWidth, windowHeight, color('#5D9B9B'))
	balls = []
}

function draw() {

	board.draw()
	
	for (var i = 0; i < balls.length; i++) {
		balls[i].draw()
		balls[i].move()
	}	
}

function mousePressed(){

	ball = new Ball(mouseX, mouseY, 50, randColor())
	balls.push(ball)
	
}

//Genera un color aleatorio para cada pelota
function randColor(){
	return color(random(255), random(255), random(255) )
}

