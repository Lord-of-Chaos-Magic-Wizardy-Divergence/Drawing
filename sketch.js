var blue,cyan,green,darkGreen,red,pink,yellow,orange,purple,eraser,black,color,thickness,slider,clear,clearIMG,glasses,glassesIMG,harmony,harmonyIMG,pony,ponyIMG,mouseState;

function preload(){
  clearIMG = loadImage("clear.png");
  ponyIMG = loadImage("pony.png");
  glassesIMG = loadImage("sunglasses.png");
  harmonyIMG = loadImage("harmony.png");
}

function setup() {
  createCanvas(550,700);
  background(255);
  
  blue = createSprite(25,25,50,50);
  cyan = createSprite(75,25,50,50);
  green = createSprite(125,25,50,50);
  darkGreen = createSprite(425,25,50,50);
  pink = createSprite(175,25,50,50);
  red = createSprite(275,25,50,50);
  black = createSprite(475,25,50,50);
  purple = createSprite(225,25,50,50);
  orange = createSprite(375,25,50,50);
  yellow = createSprite(325,25,50,50);
  eraser = createSprite(525,25,50,50);
  
  blue.shapeColor = "blue";
  green.shapeColor = "#00FF00";
  cyan.shapeColor = "cyan";
  darkGreen.shapeColor = "green";
  pink.shapeColor = "violet";
  red.shapeColor = "red";
  purple.shapeColor = "purple";
  yellow.shapeColor = "yellow";
  orange.shapeColor = "orange";
  black.shapeColor = "black";
  eraser.shapeColor = "white";
  
  color = "black";
  
  thickness = 25;
  
  slider = createSlider(1,50,15);
  slider.position(5,655);
  slider.style('width','150px');
  
  clear = createSprite(514,666,50,50);
  clear.shapeColor = "black";
  clear.addAnimation("clear",clearIMG);
  clear.scale = 0.2;
  
  pony = createSprite(422,666,50,50);
  pony.shapeColor = "purple";
  pony.addAnimation("pony",ponyIMG);
  pony.scale = 0.06;
  
  harmony = createSprite(320,666,50,50);
  harmony.shapeColor = "violet";
  harmony.addAnimation("harmony",harmonyIMG);
  harmony.scale = 0.06;
  
  glasses = createSprite(219,666,50,50);
  glasses.shapeColor = "black";
  glasses.addAnimation("glasses",glassesIMG);
  glasses.scale = 0.15;

  mouseState = "draw";
}

function draw() {
  
  strokeWeight(3);
  line(0,630,550,630);
  line(0,51,550,51);
  line(170,630,170,700);
  line(475,630,475,700);
  line(0,0,550,0);
  line(550,0,550,700);
  line(550,700,0,700);
  line(0,700,0,0);
  
  thickness = slider.value();
  
  if(mouseIsPressed && mouseIsOver(blue)){
    color = "blue"; 
  }
  if(mouseIsPressed && mouseIsOver(green)){
    color = "#00FF00"; 
  }
  if(mouseIsPressed && mouseIsOver(cyan)){
    color = "cyan"; 
  }
  if(mouseIsPressed && mouseIsOver(darkGreen)){
    color = "green"; 
  }
  if(mouseIsPressed && mouseIsOver(pink)){
    color = "violet"; 
  }
  if(mouseIsPressed && mouseIsOver(red)){
    color = "red"; 
  }
  if(mouseIsPressed && mouseIsOver(yellow)){
    color = "yellow"; 
  }
  if(mouseIsPressed && mouseIsOver(orange)){
    color = "orange"; 
  }
  if(mouseIsPressed && mouseIsOver(purple)){
    color = "purple"; 
  }
  if(mouseIsPressed && mouseIsOver(black)){
    color = "black"; 
  }
  if(mouseIsPressed && mouseIsOver(eraser)){
    color = "white";
  }
  
  if(mouseIsPressed && mouseY < 610 && mouseState === "draw"){
    stroke(color);
    strokeWeight(thickness);
    line(mouseX,mouseY,pmouseX,pmouseY);
  }

  if(mouseWentDown("leftButton") && mouseIsOver(glasses)){
    mouseState = "glasses";
    glasses.scale = 0.35;
  }else if(mouseWentUp("leftButton")){
    mouseState = "draw";
  }
  if(mouseWentDown("leftButton") && mouseIsOver(pony)){
    mouseState = "pony";    
    pony.scale = 0.25;
  }else if(mouseWentUp("leftButton")){
    mouseState = "draw";  
  }
  if(mouseWentDown("leftButton") && mouseIsOver(harmony)){
    mouseState = "harmony";
    harmony.scale = 0.15;
  }else if(mouseWentUp("leftButton")){
    mouseState = "draw";
  }

  if(mouseState === "glasses"){
    glasses.x = mouseX;
    glasses.y = mouseY;
    background(255);
  }
  if(mouseState === "pony"){
    pony.x = mouseX;
    pony.y = mouseY;
    background(255);
  }
  if(mouseState === "harmony"){
    harmony.x = mouseX;
    harmony.y = mouseY;
    background(255);
  }
  
  if(mouseIsPressed && mouseIsOver(clear)){
    background(255);
  }

  drawSprites();
}