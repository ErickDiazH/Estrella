
const p1 = { x: 0, y:0 }
const p2 = { x: this.innerWidth, y: this.innerHeight } 

const p3 = { x: (this.innerWidth/2), y: 0 }
const p4 = { x: (this.innerWidth/2), y: this.innerHeight }

const p5 = { x: 0, y: (this.innerHeight/2) }
const p6 = { x: this.innerWidth, y: (this.innerHeight/2) }

const p7 = { x: this.innerWidth, y: 0 }
const p8 = { x: 0, y: this.innerHeight }


function setup() {

	createCanvas(windowWidth, windowHeight);

}

function draw() {

	ecuapp(p1, p2)
	ecuapp(p3, p4)
	ecuapp(p5, p6)
	ecuapp(p7, p8)

}

function ecuapp(p1, p2){

	const dx = p2.x - p1.x
	const dy = p2.y - p1.y

	const m = dy / dx
	const b = p1.y - m * p1.x

	point(p1.x, p1.y)
	
	let x = p1.x + 1
	let y

	while(x != p2.x){

		y = m * x + b

		point(x, y)

		if(p2.x > p1.x){
			x++
		}else{
			x--
		}

	}

	if(p1.x == p2.x){
		y = p1.y 
		while(y != p2.y){
			point(x, y)
			y++
		}
	}
}


