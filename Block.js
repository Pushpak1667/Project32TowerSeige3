class Block{

    constructor(x, y) {

        var options = {
            isStatic: false,
            restitution : 0.1,
            friction : 1,
            density : 0.5 
        }
        this.body = Bodies.rectangle(x, y,60,40, options);
        this.width = 60;
        this.height = 40;
        this.Visibility = 255;
        World.add(world, this.body);

    }
    score(){
        if (this.Visibility<0 && this.Visibility>-105){
        score++
        }    
        }
    display() {
        var pos = this.body.position;
        if(this.body.speed < 5){
        strokeWeight(5);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
    else{
        World.remove(world,this.body)
        push();
        this.Visibility = this.Visibility - 7;
        tint(255,this.Visibility);
        pop();
    }
}


}