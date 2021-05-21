const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body;
var ball 

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  var options = {
    isStatic :true
  }

  body = Bodies.rectangle(200,390,400,50,options);
  World.add(world,body);

  var ball_options = {
    restitution:1
  }

  ball = Bodies.circle(200,100, 20,ball_options)
  World.add (world, ball)

  console.log(body);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("green");
  rectMode(CENTER);
  rect(body.position.x,body.position.y,400,50);
  fill("lightblue");

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
 

}