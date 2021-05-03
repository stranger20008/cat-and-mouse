var tom,tom_image,tom_image2
var jerry,jerry_image,jerry_image2
var bg,bg_image
var ground



function preload() {
tom_image=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png")
jerry_image=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png")
tom_image2=loadImage("images/cat4.png")
jerry_image2=loadImage("images/mouse4.png")
bg_image=loadImage("images/garden.png")
}

function setup(){
    createCanvas(800,800);
    
    tom = createSprite(700,590,10,10)
    tom.addAnimation("walking",tom_image)
    tom.scale=0.3

    jerry = createSprite(150,570,10,10)
    jerry.addAnimation("dancing",jerry_image);
    jerry.scale=0.3

    bg=createSprite(400,400,10,10)
    bg.addImage(bg_image)
    bg.scale=1.0

    ground=createSprite(400,720,800,10)
    //ground.visible=false;
    

}

function draw() {

    background("black");
    
    if (tom.isTouching(jerry)) {
     tom.addImage(tom_image2)
     jerry.addImage(jerry_image2)
        
    }

    tom.depth=bg.depth+1
    jerry.depth=bg.depth+1

    drawSprites();
}



