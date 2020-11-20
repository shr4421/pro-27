class Rope {

    constructor (bodyA,bodyB,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={

        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX,y:this.offsetY}

     }
      this.rope=Constraint.create(options);
     World.add(world,this.rope)

    }

display(){

    var pointA =this.rope.bodyA.position;
    var pointB =this.rope.bodyB.position;

    var a1X=pointA.x;
    var a1Y=pointA.y;

    var a2X=pointB.x+this.offsetX;
    var a2Y=pointB.y+this.offsetY;

    line(a1X,a1Y,a2X,a2Y);

    
}

}