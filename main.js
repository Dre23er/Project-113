function preload(){

}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
}

function draw(){
    ellipse(50,50,40,40);
    ellipse(50,350,40,40);
    ellipse(350,350,40,40);
    ellipse(350,50,40,40);
    rect(25,55,50,290,300);
    rect(325,55,50,290,300);
    rect(50,25,300,50,55);
    rect(50,325,300,50,55);

}

function take_snapshot(){
save("i_love_food.png");
}