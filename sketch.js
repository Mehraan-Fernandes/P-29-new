const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Mouse = Matter.Mouse
const Constraint = Matter.Constraint
//const MouseConstraint = Matter.MouseConstraint

var engine, world;
//var mConstraint
var boxes1=[]
var boxes2=[]
var boxes3=[]
var boxes4=[]
var boxes5=[]
var boxes6=[]

function setup() {
  const canvas = createCanvas(1100,500);
  
  engine=Engine.create();
  world = engine.world;

  ground = new Ground(550,490,1200,20);
  groundObj1 = new Ground(600,350,220,20)
  groundObj2 = new Ground(900,290,250,20)
  obj = new Destroyer(200,350,25)
  rope=new Rope(obj.body,{x:205,y:350})
  console.log(obj.body)

  for(i=0; i < 3 ; i++){
  boxes1[i]=new Blocks(600,300-i*75,120,50)
  }
  for(q=0; q < 3 ; q++){
  boxes2[q]=new Blocks(515,300-q*75,50,50)
  }
  for(q=0; q < 3 ; q++){
  boxes3[q]=new Blocks(685,300-q*75,50,50)
  }
  for(q=0; q < 3 ; q++){
    boxes4[q]=new Blocks(900,200-q*75,50,50)
  }
  for(q=0; q < 3 ; q++){
    boxes5[q]=new Blocks(825,200-q*75,100,50)
  }
  for(q=0; q < 3 ; q++){
    boxes6[q]=new Blocks(975,200-q*75,100,50)
  }
/*
  const mouse = Mouse.create(canvas.elt)
  const options={
    mouse:mouse
  }
  mConstraint=MouseConstraint.create(engine,options)
  World.add(world,mConstraint);*/
  }

function draw () {
  background(255,160,239);
  Engine.update(engine); 
  for(var bl1 of boxes1){
  bl1.display();
}

for(var bl2 of boxes2){
  bl2.display();
}

for(var bl3 of boxes3){
  bl3.display();
}

for(var bl4 of boxes4){
  bl4.display();
}
for(var bl5 of boxes5){
  bl5.display();
}
for(var bl6 of boxes6){
  bl6.display();
}

  ground.display();
  groundObj1.display();
  groundObj2.display();
  obj.display();
  rope.display();

}


function mouseDragged(){
  Matter.Body.setPosition(obj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 // setTimeout(()=>{
  rope.fly();
  //},100)
}