var garden,gardenImg;
var cat1,cat2,cat3,cat4;
var catImg1,catImg2,catImg3,catImg4;
var catRunning,catLastImage;
var mouse1,mouse2,mouse3,mouse4;
var mouseImg1,mouseImg2,mouseImg3,mouseImg4;



function preload() {
gardenImg = loadImage("images/garden.png");
catImg1 = loadImage("images/cat1.png");
catImg2 = loadImage("images/cat2.png");
catImg3 = loadImage("images/cat3.png");
catImg4 = loadImage("images/cat4.png");
mouseImg1 = loadImage("images/mouse1.png");
mouseImg2 = loadImage("images/mouse2.png");
mouseImg3 = loadImage("images/mouse3.png");
mouseImg4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

 garden= createSprite(500,500);
 garden.addImage("garden",gardenImg);

// creating sprites for cats
cat1 = createSprite(800,500);
cat1.addImage("cat1",catImg1);
cat1.scale = 0.1;

cat2 = createSprite(800,550);
cat2.addImage("cat2",catImg2);
cat2.scale = 0.1;

cat3 = createSprite(800,600);
cat3.addImage("cat3",catImg3);
cat3.scale = 0.1;

cat4 = createSprite(800,650);
cat4.addImage("cat4",catImg4);
cat4.scale = 0.1;

// creating sprites for mouses
mouse1 = createSprite(100,650);
mouse1.addImage("mouse1",mouseImg1)
mouse1.scale = 0.1;

mouse2 = createSprite(200,700);
mouse2.addImage("mouse2",mouseImg2)
mouse2.scale = 0.1;

mouse3 = createSprite(300,650);
mouse3.addImage("mouse3",mouseImg3)
mouse3.scale = 0.1;

mouse4 = createSprite(400,650);
mouse4.addImage("mouse4",mouseImg4)
mouse4.scale = 0.1;

}

function draw() {

    background(255);

    if(cat1.x - mouse1.x < (cat1.witdh - mouse1.witdh)/2){
        cat1.addAnimation("catLastImage",catImg3)
        cat1.changeAnimation("catLastImage");
        cat1.VelocityX = 0;
    }
 
    drawSprites();
}


function keyPressed(){

if(KeyCode === LEFT_ARROW){
cat1.VelocityX = -5;
cat1.addAnimation("catRunning",catImg2)
cat1.changeAnimation("catRunning");

}
}
