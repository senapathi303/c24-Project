class Sand{
    constructor(x,y,height,width){
        var options={
            'restitution':1.3,
            'friction' : 5.0,
            'density':1.0
        }
 
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
 
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
     fill("red");
     circle(0, 0, this.radius);
     pop();
 
    }
 };