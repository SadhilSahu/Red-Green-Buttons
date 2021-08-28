
var redbg;
var greenbg;


function setup() {
  createCanvas(400,400);

  // red button
  btn_red = createButton("RED");
  btn_red.position(100,50);

  //green button
  btn_green = createButton("GREEN")
  btn_green.position(250,50);
}

function draw() 
{
  background("white");
  background(30);
}

function redbg(){
  r=255;
  g=0;
  b=0;
}
function greenbg(){
  r=0;
  g=255;
  b=0;
}

if(btn_red.mousePressed){
  background("red");
  }
  if(btn_green.mousePressed){
    background("green");
    }




