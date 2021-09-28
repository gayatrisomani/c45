var gun,gunan;
var target,targetImg,targetGroup;
var bul,bullet,bulGroup;
var backImg;
var isDestroyed = false;

function preload(){
    gunan = loadImage("m1887.png")
    targetImg = loadImage("target.png")
    bullet = loadImage("bullet.png")
    backImg = loadImage("background.png")
}
function setup() {
    createCanvas(1500, 750);


    gun = createSprite(100,670,30,40)
    gun.addImage(gunan)
    gun.scale = 0.2

    target = createSprite(60,200,50,70)

    bulGroup = new Group()
    targetGroup = new Group()
  }
  
  function draw() {
    background( backImg);
    if(keyDown("left")){
        gun.x = gun.x-20
    }
    if(keyDown("right")){
        gun.x = gun.x+20
    }
    if(keyDown("space")){
        bul = createSprite(100,600,5,10)
        bulGroup.add(bul)
       // bul.addImage(bullet)
        bul.x = gun.x
        target.depth = bul.depth;
        bul.depth = bul.depth + 1;
            
        bul.velocityY = -10
    }
    rtarget();
   // target.overlap(bulGroup, function(collector, collected) {
       
        //collected is the sprite in the group collectibles that triggered
        //the event
       // collected.remove();
     // });
     if(target.isTouching(bulGroup)){
         console.log("www")
         target.visible=false
        isDestroyed = true
     }
    drawSprites();
  }
  function rtarget(){
  
     if( isDestroyed){
         x = random(100,1500)
         y = random(50,400)
         target = createSprite(x,y,50,70)
         // target.addImage(targetImg)
          //target.scale = 0.3
          isDestroyed = false
     }
  }

  