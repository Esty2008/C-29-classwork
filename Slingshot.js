class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage('sprites/sling3.png');
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling2,170,20);
        image(this.sling1,200,30);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke('#301608');
            if(pointA.x < 210){
             line(pointA.x-20,pointA.y,pointB.x,pointB.y);
                line(pointA.x-20,pointA.y,pointB.x-30,pointB.y);
                image(this.sling3,pointA.x-20,pointA.y,7,25);
            }else{
                line(pointA.x+20,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+20,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x+20,pointA.y,7,25);
            }
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
    }
    
}