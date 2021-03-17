//Create variables here
var dog,happyDog;
var database;
var foods,foodStocks;
function preload()
{
	//load images here
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250);
  database = firebase.database();
  foodStocks=database.ref('food');
  foodStocks.on('value',readStock());
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here

}



