class Blocks{
    constructor(x,y,width,height){
        var options={
            friction:0.07
        }
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        push();
        strokeWeight(2)
        stroke("white")
        fill(7,211,247)
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}