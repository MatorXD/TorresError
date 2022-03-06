class slingShot{
    constructor(bodyA,pointB){
        var potion={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        };
        this.sling=Constraint.create(option);
        this.pointB=pointB;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
          var pointA=this.sling.bodyA.position;
          var pointB=this.pointB;
          strokeWeight(4);
          stoke("turquoise");
          line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}