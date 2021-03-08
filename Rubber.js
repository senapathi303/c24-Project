class Rubber{
    constructor(x,y,height,width){
        var options={
            'restitution':0.3,
            'friction' : 5.0,
            'density':1.0
        }
 
        this.body = Bodies.circle(x,y,70,options);
        this.radius = 70;
 
        World.add(world,this.body);
    }
    display(){
 
     var pos = this.body.position;
     var angle = this.body.angle;
 
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     strokeWeight(4);
     stroke("black");
     fill("grey");
     circle(0, 0, this.radius);
     pop();
 
    }
 };