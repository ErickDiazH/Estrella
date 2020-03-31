class Ball{
    constructor(x, y, d, c){
        this.x = x
        this.y = y
        this.d = d
        this.c = c
        this.balls
        this.speed = 5
        this.dirX = this.direction()
        this.dirY = this.direction()
    }

    draw(){
        push()
        stroke('#212121')
        fill(this.c);
        ellipse(this.x, this.y, this.d, this.d)
        this.crashWall()
        this.crashBall()
        pop()
    }

    move(){
        this.x += this.speed * this.dirX
        this.y += this.speed * this.dirY
    }

    direction(){
        return floor(random(2)) * 2 - 1
    }

    //Verifica el choque en las paredes del canvas
    crashWall(){
        for(var i = 0; i < balls.length; i++){
            if(balls[i].x <= balls[i].d/2){
                balls[i].dirX = 1
            }else if(balls[i].x >= windowWidth-25){
               balls[i].dirX = -1
           }else if(balls[i].y <= balls[i].d/2){
               balls[i].dirY = 1
           }else if(balls[i].y >= windowHeight-25){
               balls[i].dirY = -1
            }
        }
   }

   //Verifica el choque entre las pelotas de colores
   crashBall(){
	for(let i = 0; i < balls.length; i++)
		{
			const dx = this.x - balls[i].x;
            const dy = this.y - balls[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < floor(this.d/2) + floor(balls[i].d/2)) {
                
            	balls[i].dirX = -balls[i].dirX;
                balls[i].dirY = -balls[i].dirY;

                this.dirX = -this.dirX;
                this.dirY = -this.dirY;
            }
		}
}
        
}