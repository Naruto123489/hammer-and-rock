const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1,bird,box3,box4;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(160,370,70,70);
    box2 = new Box(340,370,70,70);
    pig1 = new Pig(250,370);
    log1 = new Log(250,270,250,PI/2);
    bird = new Bird(200,200,50,20)
    ground = new Ground(200,560,1600,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird.display();
   // box3.display();
}