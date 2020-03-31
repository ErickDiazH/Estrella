class Board{
    constructor (w, h , c){
        this.w = w;
        this.h = h;
        this.c = c;
    }

    draw(){
        noStroke();
        fill(this.c);
        rect(0, 0, this.w, this.h);
    }

    

}