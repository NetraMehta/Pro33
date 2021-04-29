const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world; 

var bgImg;

var boysplaying;
var boysplayingImg;

var snowfall = [];

function preload(){
  bgImg = loadImage("snow1.jpg");
  boysplayingImg = loadImage("snowman.png")
}

function setup() {
  createCanvas(1400, 700);

  engine = Engine.create();
  world = engine.world;

  boysplaying = createSprite(700, 350, 50, 50);
  boysplaying.addImage(boysplayingImg);
  boysplaying.scale = 2;

  Engine.run(engine);
}

function draw() {
  background(bgImg); 
  drawSprites();

  if(frameCount%10 === 0){
    snowfall.push(new Snowfall(random(10, 1390), -50));
  }

  for(var i = 0; i < snowfall.length; i++){
    snowfall[i].display();
  }

  Engine.update(engine);
}