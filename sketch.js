var harry;
var hermione;
var ronald;
var db;
var db;
var gameState = 0;
var playerCount;
var f;
var p;
var g;
var allPlayer;
var distance = 0;
var characters;

function preload(){
  
}

function setup() {
  db = firebase.database();
  createCanvas(900,500);
  g = new game();
  g.getState();
  g.start();
 

}

function draw() {
  background("pink"); 
  if(playerCount == 3){
    g.update(1);

}
if(gameState == 1){
g.play();
}

}