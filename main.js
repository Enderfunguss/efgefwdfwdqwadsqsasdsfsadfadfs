function preLoad(){

}

function setup(){
    canvas = createCanvas(720,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,175,120,366,240);
    e = color('green');
    fill(e);      
    stroke(20,0,0);
    rect(40,70,40,310);
    rect(640,70,40,310);
    rect(60,45,600,40);
    rect(60,400,600,40);
    e2 = color('red');
    fill(e2);
    circle(60,60,110);
    circle(660,60,110);
    circle(60,420,110);
    circle(660,420,110);
}   

function download(){
    save('imageTaken.png');
}