const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var wall1,wall2;
var hexagon;

function preload(){
  hexagon=loadImage("hexagon.png")
}

function setup() {
  createCanvas(1500,500)
  engine = Engine.create();
	world = engine.world;


  ground = new Ground(400,200,20,20);
  wall1=new Wall(947,250,160,20);
  wall2=new Wall(653,350,160,20);
  B1= new Block(590,325,20,30);
  B2= new Block(615,325,20,30);
  B3= new Block(640,325,20,30);
  B4= new Block(665,325,20,30);
  B5= new Block(690,325,20,30);
  B6= new Block(715,325,20,30);

  B7=  new Block(880,225,20,30);
  B8=  new Block(905,225,20,30);
  B9=  new Block(930,225,20,30);
  B10= new Block(955,225,20,30);
  B11= new Block(980,225,20,30);
  B12= new Block(1005,225,20,30);
  
  B13=  new Block(892,195,20,30);
  B14=  new Block(917,195,20,30);
  B15=  new Block(942,195,20,30);
  B16= new Block(967,195,20,30);
  B17= new Block(993,195,20,30);

  B18=  new Block(905,165,20,30);
  B19=  new Block(930,165,20,30);
  B20=  new Block(955,165,20,30);
  B21= new Block(980,165,20,30);

  B22=  new Block(918,135,20,30);
  B23=  new Block(943,135,20,30);
  B24= new Block(968,135,20,30);

  B25=  new Block(956,105,20,30);
  B26=  new Block(931,105,20,30);

  B27=  new Block(944,75,20,30);

  B28= new Block(602,295,20,30);
  B29= new Block(627,295,20,30);
  B30= new Block(652,295,20,30);
  B31= new Block(677,295,20,30);
  B32= new Block(702,295,20,30);
  
  B33= new Block(615,265,20,30);
  B34= new Block(640,265,20,30);
  B35= new Block(665,265,20,30);
  B36= new Block(690,265,20,30);

  B37= new Block(627,235,20,30);
  B38= new Block(652,235,20,30);
  B39= new Block(677,235,20,30);
  
  B40= new Block(639,205,20,30);
  B41= new Block(664,205,20,30);
  
  B42= new Block(650,175,20,30);

  ball=Bodies.circle(50,200,20);
   World.add(world,ball);
  slingshot= new Slingshot(ball,{x:100,y:200});
   




}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();

  fill("lightblue")
  B1. display();
  B2. display();
  B3. display();
  B4. display();
  B5. display();
  B6. display();

  fill("red")
  B7.display();
  B8.display();
  B9.display();
  B10.display();
  B11.display();
  B12.display();

  fill("skyblue")
  B13.display();
  B14.display();
  B15.display();
  B16.display();
  B17.display();

  fill("lightgreen");
  B18.display();
  B19.display();
  B20.display();
  B21.display();
  
  fill("white")
  B22.display();
  B23.display();
  B24.display();
  
  fill("pink")
  B25.display();
  B26.display();

  fill("gold")
  B27.display();
  
  fill("lightgreen")
  B28.display();
  B29.display();
  B30.display();
  B30.display();
  B31.display();
  B32.display();
  
  fill("red")
  B33.display();
  B34.display();
  B35.display();
  B36.display();
  
  fill("white");
  B37.display();
  B38.display();
  B39.display();
  
  fill("pink")
   B40.display();
   B41.display();

   fill("gold");
   B42.display();

   image(hexagon,ball.position.x,ball.position.y,60,60);
   slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball);
  }
}