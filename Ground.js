class Ground{
    constructor(){
        var ground_options={
            isStatic: true
        }
        this.ground=Bodies.rectangle(1200,490,900,20,ground_options);
        World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,2500,20);
    }
}