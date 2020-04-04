const Engine  = Matter.Engine;
const World = Matter.world;
const Bodies = Matter.Bodies;
var engine;
var  world;
var bodies; 
let ground;
let box;
let rectangle;
let bird;


function setup() {
  createCanvas(400, 400);
  ground = new Box(0,350,400,10);
  ground.shapeColor = "green";
  
  box =new Box(345,280,55,70);
 box.shapeColor = "red";
  
  rectangle = new Box(10,300,40,50);
  rectangle.shapeColor = "red";

  square = new Box(10,250,40,40);
}

function draw() {
background(0);
  fill("green");
  rect(0,350,400,10);
  
   ground.show(); 
    box.show(); 
  rectangle.show();
square.show();
}
