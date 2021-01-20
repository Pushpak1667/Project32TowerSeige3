class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 0.005,
            length:35
        }
       this.pointB = pointB
       this.launcher = Constraint.create(options);
       World.add(world,this.launcher);

    }
   fly(){
       this.launcher.bodyA = null;
   } 
   attached(body){
       this.launcher.bodyA = body;
   }
   display(){
       if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);   
       }
   }
}