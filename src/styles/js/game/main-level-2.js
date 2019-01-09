//imports the class SpiritSheet from the folder js in the file spiriteSheet.js
import SpriteSheet from '../map/spriteSheet.js';
//imports the function loadImage from the folder js in the file loadImage.js
import {loadImage} from '../map/loadImage.js';






var context, controller, player, loop;
//creates the canvas and allows the user to talkt to the canvas.
context = document.querySelector("canvas").getContext("2d");
//Gives the canvas the property of 840 pixel of height
context.canvas.height = 840;
//Gives the canvas the property of 1600 pixel of width. 
context.canvas.width = 1600;

player = {

  height:30, //height of the character.
  jumping:true,
  width:30, //width of the character.
  x:0, //The distance from the right border which the character gets summond.
  x_velocity:20,
  y:550, //The distance from the top border which the character gets summond.
  y_velocity:0

};


///////////////////////////////////////////////////////////////
//////////////////////////Movement/////////////////////////////
///////////////////////////////////////////////////////////////

controller = {
//variable left, right, and up get false as a default value.
  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;
    //Waits until one of the buttons get pressed.
    switch(event.keyCode) {

      case 37:
        controller.left = key_state;
        break;
      case 32:
        controller.up = key_state;
        break;
      case 39:
        controller.right = key_state;
        break;
      case 38: 
        controller.space = key_state;
        break;
      case 82:
        controller.r = key_state;
        break;

    }

  }

};

var jumpheightstatus = false;

loop = function(timestamp) {

  //Adds the Background and the ground to the canvas.
  loadImage('../../res/images/mariotileset.png')
  .then(image => {
      const sprites = new SpriteSheet (image, 30, 30);
      //Defines were to find the image on the mariotileset.png image 
          sprites.define('ground', 0 , 0);
          sprites.define('sky', 27, 5 );
          sprites.define('dirt',34 , 15)

          //for-slope to fill the sky with several blue pains.
          for(let xachse = 0; xachse < 55; xachse++){
              for(let yachse = 0; yachse < 28; yachse++){
                  sprites.draw('sky', context, xachse * 30, yachse * 30);    
              }
          }
          //for-slope to make the ground
          for(let xachse = 0; xachse < 22; xachse++){
              for(let yachse = 25; yachse < 26; yachse++){
                  sprites.draw('ground', context, xachse * 30, yachse * 30);    
              }
          }

          //for-slope to make dirt
          for(let xachse = 0; xachse < 22; xachse++){
            for(let yachse = 26; yachse < 29; yachse++){
              sprites.draw('dirt', context, xachse * 30, yachse * 30);
            }
          }

  });


    

      //When player pressed the spacebar it checks if button was pressed and if the character isnt already jumping.
    if (controller.up && player.jumping == false) {
      //Its minus -50 since y_velocity begins at the border on the top. 
      if(jumpheightstatus == false){
        player.y_velocity -= 42;
      }else{
        player.y_velocity -= 30;
      }
    
      player.jumping = true;
    }

    if (controller.left) {
      //Speed gets decreased by 0.5 when button: left arrow; is pressed.
      player.x_velocity -= 2;

    }

    if (controller.right) {
      //The speed gets increased by 0.5 when button: right arrow; is pressed.
      player.x_velocity += 2;

    }

    if(controller.right && controller.space){
        //If buttons: right arrow, spacebar; is pressed it increased the speed by another 1 (Turbo).
        player.x_velocity += 0.3;
    }

    if(controller.r){
      location.reload();
    }


  

    player.y_velocity += 1; //This speed of which defines how fast the creature gets back to the floor.
    player.x += player.x_velocity;
    player.y += player.y_velocity;
    player.x_velocity *= 0.4;// Basically acts like the friction.
    player.y_velocity *= 0.9;// Basically acts like the friction.

    // If the character is falling below the floor this prevents it from falling further down.
    if (player.y > 720) {

      player.jumping = false;
      player.y = 720;
      player.y_velocity = 0;

    }


      
    context.beginPath();
    context.rect(player. x, player.y, player.width, player.height);
    

      //Creating the obstacles you can stan on.
  var obstacle_1 = {
    x: 100,    
    y:650,
    width:100, 
    height:7,
    collision:612, 
  };

  var obstacle_2 = {
      x: 310,
      y: 540,
      width: 100,
      height: 7,
      collision: 503,
  }

  var obstacle_3 = {
      x: 100,
      y: 413,
      width: 107,
      height: 7,
      collision: 376,
  }

  var obstacle_4 = {
      x: 310,
      y: 303,
      width: 100,
       height: 7,
      collision: 267,
  }
 
  var obstacle_5 = {
      x: 100,
      y: 186,
      width: 100,
      height: 7,
      collision: 148,
  }

  var obstacle_6 = {
      x: 310,
      y: 35,
      width: 200,
      height: 7,
      collision: 0,
  }

  var obstacle_7 = {
    x: 510,
    y: 35,
    width: 7,
    height: 715,
  }

  var obstalce_8 = {
    x: 610,
    y: 0,
    height: 620,
    width: 7,
    collision: 0,
  }

  var obstacle_9 = {
    x: 715,
    y: 670,
    height: 7,
    width: 70,
    collision: 635,
  }

  var obstacle_10 = {
    x: 865,
    y:600,
    height: 7,
    width: 70,
    collision: 563,
  }

  var obstacle_11 = {
    x: 1065,
    y: 600,
    height: 7,
    width: 70,
    collision: 563,
  }

  var obstacle_12 = {
    x: 1180,
    y: 700,
    height: 7,
    width: 20,
    collision: 664,
  }
  
  var obstacle_13 = {
    x: 1300,
    y: 650,
    height: 7,
    width: 70,
    collision: 615,
  }

  var obstacle_14 = {
    x: 1470,
    y: 600,
    height: 7,
    width: 70,
    collision: 567,
  }

  var obstacle_15 = {
    x: 1470,
    y: 500,
    height: 7,
    width: 70,
    collision: 467,
  }

  var obstacle_16 = {
    x: 1300,
    y: 420,
    height: 7,
    width: 70,
    collision: 387,
  }

  var obstacle_17 = {
    x: 1130,
    y: 390,
    height: 7,
    width: 70,
    collision: 353,
  }

  var obstacle_18 = {
    x: 960,
    y: 360,
    height: 7,
    width: 70,
    collision: 322,
  }

  var obstacle_19 = {
    x: 755, 
    y: 440,
    height: 7,
    width: 70,
    collision: 405,
  }

  var obstacle_20 = {
    x: 617,
    y: 400,
    height: 7,
    width: 70,
    collision: 365,
  }

  var obstacle_21 = {
    x: 617,
    y: 300,
    height: 7,
    width: 70,
    collision: 270,
  }

  var obstacle_22 = {
    x: 750,
    y: 200,
    height: 7,
    width: 70,
    collision: 163,
  }

  var obstacle_23 = {
    x: 900,
    y: 190,
    height: 7,
    width: 25,
    collision: 153,
  }

  var obstacle_24 = {
    x: 1050,
    y: 180,
    height: 7,
    width: 25,
    collision: 143,
  }

  var obstacle_25 = {
    x: 1200,
    y: 170,
    height: 7,
    width: 25,
    collision: 133,
  }

  var obstacle_26 = {
    x: 1350,
    y: 160,
    height: 7,
    width: 25,
    collision: 123,
  }

  var obstacle_27 = {
    x: 1500,
    y: 150,
    height: 7,
    width: 150,
    collision: 113,
  }

  

  var obstacles = [obstacle_1, obstacle_2, obstacle_3, obstacle_4, obstacle_5, obstacle_6, obstacle_7, obstalce_8, obstacle_9, obstacle_10, obstacle_11, obstacle_12, obstacle_13, obstacle_14, obstacle_15, obstacle_16, obstacle_17, obstacle_18, obstacle_19, obstacle_20, obstacle_21, obstacle_22, obstacle_23, obstacle_24, obstacle_25, obstacle_26, obstacle_27];

  //Drawing the obstacles you can stand on.  
  obstacles.forEach(function (obst) {
  context.rect(obst.x, obst.y, obst.width, obst.height);

  //Allows you to stand on an obstacle that you create further down.(1. obstacle)
  if(player.x > obst.x - 30 && player.x < obst.x + obst.width && player.y > obst.y - 30 && player.y < obst.y + 10 - 30){
    player.y = obst.collision;
    player.jumping = false;

  }

  if(player.x > 410 && player.x < 450 && player.y < 50){
    player.y = 30;
    player.x = 530;
  }

  if(player.x > 582 && player.x < 590 && player.y < 600 && player.y > 0){
    player.x = 30;
    player.y = obst.collision;

  }

  if(player.x > 485 && player.x < 488 && player.y > 50){
    player.y = obst.collision;
    player.x = 30;
  }


    if(player.x > 1550 - 30 && player.x < 1600 && player.y > 0 && player.y < 150 ){
      player.y = 620;
      player.jumping = false;
      document.getElementById("hiddenScore").value = timestamp;
      player.x = 100;
      player.y = 100; 
      redirector();
    }

    if(player.x > 650 && player.y > 700){
      player.x = 620;
      player.y = 550;
    }

    if(player.x > 80 && player.x < 490 && player.y > 700
      ){
        player.jumping = true;
    }


  if(player.x > 590){
    jumpheightstatus = true;
  }else{
    jumpheightstatus = false;
  }

  

 });
    context.fill();
    context.lineWidth = 4;
    context.beginPath();
    context.stroke();  

    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);
    
};



var timerRunning = true;
var timestamp = 0;
var time = 0;

function timer(){
  time = time + 0.5;
  
  console.log(time);
  console.log(player.x);
  console.log(player.y);
  
  return time;
}
if(timerRunning == true){
timestamp = setInterval(timer, 500);
}

function redirector(){
  location.reload(); 
  window.location = "scoreboard-level-2.view.php?score=" +  "1c1986y37973.8912780548923574.20569.868e881u" + document.getElementById("hiddenScore").value + "0ru167r5.i81t6s792.14863147.181556841";
}0



window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);


