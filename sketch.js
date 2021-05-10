const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var groundObj;
var div = [];
var plinko = [];
var particle = [];
var engine, world;

var score = 0;

function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;

  groundObj = new Ground(240, 595, 480, 25);
  for (var k = 0; k <=width; k = k + 80) { 
    div.push(new Division(k, height-300/2, 10, 300)); 
  }

  for (var k = 50; k <=width - 50; k = k + 70) { 
    plinko.push(new Plinko(k, 50)); 
  }

  for (var k = 25; k <=width - 50; k = k + 70) { 
    plinko.push(new Plinko(k, 150)); 
  }

  for (var k = 50; k <=width - 50; k = k + 70) { 
    plinko.push(new Plinko(k, 225)); 
  }


}

function draw() {
  background("black");  
  Matter.Engine.update(engine);
  groundObj.display();
  for(var k = 0; k < div.length; k++){
    div[k].display();
    }
    for(var k = 0; k < plinko.length; k++){
      plinko[k].display();
      }

      if(frameCount%60 === 0){
        particle.push(new Particle(random(10, 460), 0));
        score++
      }

      for(var k = 0; k < particle.length; k++){
        particle[k].display();
        }
      

}
