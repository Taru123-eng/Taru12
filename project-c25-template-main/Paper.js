class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restituition:0.3,
            friction:0,
            density:1.2
        }
        this.x=x
        this.body=Bodies.circle(this.x,y,radius,options)

        this.radius=radius
        this.image=loadImage("paper.png")
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,100,100);
        pop()
    }
}