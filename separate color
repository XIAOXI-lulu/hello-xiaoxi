var video;

function setup() {
  createCanvas(480, 360,);
  background(51);
  video = createCapture(VIDEO);
  video.size(500, 500);
 
}

function draw() {
  background(220);
  var r=(r, 0, 10, 0, mouseX, mouseY);
  var g=(g, 3, g++,90,mouseY);
  var height=360;
  if (mouseIsPressed){
     image(video,0,0,width,height);
     tint(200, g++, 0);
     image(video,2,10,90,80);
     tint(10, g++, 0);
     image(video,390,280,90,80);
     tint(100, g++, 150);
     image(video,2,280,90,80);
     tint(233, g++, 0);
     image(video,390,10,90,80);
     tint(100, g++, 40);
    }

  else{
     image(video,0,0,width,height);
     tint(r, 30, 0);
     image(video,2,10,90,80);
     tint(r, 230, 30);
     image(video,390,280,90,80);
     tint(r, 200, 15);
     image(video,2,280,90,80);
     tint(r, 1, 0);
     image(video,390,10,90,80);
     tint(r, g++, 40);}

  print(mouseIsPressed);
  //image(video, 0, 0, width, height);

}
