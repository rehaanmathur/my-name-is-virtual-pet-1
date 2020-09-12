//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{
 dog=loadImage(Image/dogimg.png);
 happyDog = loadImage(Image/dogimg1.png);
}

function setup() {
  createCanvas(500, 500);
  dog1 = createSprite(200,200)
  dog1.addImage(dog);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}



