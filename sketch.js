let vehicle;
let path;
let path1;
let mall;
let kampus;
let rumput;


function preload(){
  mall = loadImage('malll.png');
  kampus = loadImage('kampus.png');
  rumput = loadImage('rumput.png');
  grass = loadImage('grass.png');
  lampu = loadImage('lampu.png');
}

function setup() {
  createCanvas(640, 400);
  vehicle = new Vehicle(100, 100);
  vehicle.vel.x = 2;
  path = new Path(0, 200, 700, 200);
  path1 = new Path1(405,0, 200, 400);


}

function draw() {
  background('green');
  image(mall,115,20,200,150);
  image(kampus,400,40,220,150);
  image(grass,0,320,190,85);
  image(grass,240,300,410,107);
  image(lampu,240,220,200,200);
  
  let force = vehicle.follow(path);
  let force1 = vehicle.follow(path1);
  vehicle.applyForce(force);
  vehicle.applyForce(force1)
  
  vehicle.edges();
  vehicle.update();
  vehicle.show();

  path.show();
  path1.show();
}