class Bob {

    constructor(x,y,radius){
    
        var options={
    
            isStatic:false,
            restitution:1.2,
            friction:0.5,
            density:3
        
        }
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,radius/2,options);
        World.add(world,this.body);
    
    }
    
    display(){
    
        var bobpos=this.body.position;
    
        push();
        translate(bobpos.x,bobpos.y);
        rectMode(CENTER);
         fill("#C71585");
         ellipse(0,0,this.radius,this.radius);
        pop();
    
    }
    
    
    
    }