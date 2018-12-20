//imports the class SpiritSheet from the folder js in the file spiriteSheet.js
import SpriteSheet from './spriteSheet.js';
//imports the function loadImage from the folder js in the file loadImage.js
import {loadImage} from './loadImage.js';



var timerRunning = 1;
var context, controller, rectangle, loop;
//creates the canvas and allows the user to talkt to the canvas.
context = document.querySelector("canvas").getContext("2d");
//Gives the canvas the property of 840 pixel of height
context.canvas.height = 840;
//Gives the canvas the property of 1600 pixel of width. 
context.canvas.width = 1600;

rectangle = {

  height:30, //height of the character.
  jumping:true,
  width:30, //width of the character.
  x:0, //The distance from the right border which the character gets summond.
  x_velocity:20,
  y:400, //The distance from the top border which the character gets summond.
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

    }

  }

};

loop = function(timestamp) {

  //Adds the Background and the ground to the canvas.
  loadImage('../styles/image/mariotileset.png')
  .then(image => {
      const sprites = new SpriteSheet (image, 30, 30);
      //Defines were to find the image on the mariotileset.png image 
          sprites.define('ground', 0 , 0);
          sprites.define('sky', 27, 5 );
          sprites.define('dirt',34 , 15)

          //for-slope to fill the sky with several blue pains.
          for(let xachse = 0; xachse < 100; xachse++){
              for(let yachse = 0; yachse < 25; yachse++){
                  sprites.draw('sky', context, xachse * 30, yachse * 30);    
              }
          }
          //for-slope to make the ground
          for(let xachse = 0; xachse < 100; xachse++){
              for(let yachse = 25; yachse < 26; yachse++){
                  sprites.draw('ground', context, xachse * 30, yachse * 30);    
              }
          }

          //for-slope to make dirt
          for(let xachse = 0; xachse < 100; xachse++){
            for(let yachse = 26; yachse < 29; yachse++){
              sprites.draw('dirt', context, xachse * 30, yachse * 30);
            }
          }

  });


      //When player pressed the spacebar it checks if button was pressed and if the character isnt already jumping.
    if (controller.up && rectangle.jumping == false) {
      //Its minus -50 since y_velocity begins at the border on the top. 
      rectangle.y_velocity -= 35;
      rectangle.jumping = true;
    }

    if (controller.left) {
      //Speed gets decreased by 0.5 when button: left arrow; is pressed.
      rectangle.x_velocity -= 0.35;

    }

    if (controller.right) {
      //The speed gets increased by 0.5 when button: right arrow; is pressed.
      rectangle.x_velocity += 0.35;

    }

    if(controller.right && controller.space){
        //If buttons: right arrow, spacebar; is pressed it increased the speed by another 1 (Turbo).
        rectangle.x_velocity += 0.2;
    }


  

    rectangle.y_velocity += 1; //This speed of which defines how fast the creature gets back to the floor.
    rectangle.x += rectangle.x_velocity;
    rectangle.y += rectangle.y_velocity;
    rectangle.x_velocity *= 0.9;// Basically acts like the friction.
    rectangle.y_velocity *= 0.9;// Basically acts like the friction.

    // If the character is falling below the floor this prevents it from falling further down.
    if (rectangle.y > 720) {

      rectangle.jumping = false;
      rectangle.y = 720;
      rectangle.y_velocity = 0;

    }


      //Allows you to stand on an obstacle that you create further down.(1. obstacle)
      /*if(rectangle.x > 300 - 30 && rectangle.x < 450 && rectangle.y > 650 - 30 && rectangle.y < 660 - 30){
        rectangle.y = 620;
        rectangle.jumping = false;*/

      //(2. obstacle)
      if(rectangle.x > 100 - 30 && rectangle.x < 100 + 150 && rectangle.y > 190  - 30 && rectangle.y < 190 + 10 - 30){
        rectangle.y = 620;
        rectangle.jumping = false;
        document.getElementById("hiddenScore").value = timestamp;
        rectangle.x = 100;
        rectangle.y = 100; 
        redirector();
      }
      


    context.beginPath();
    context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fillstyle = "red";
   
   
  //Creating the obstacles you can stan on.
  var obstacle_1 = {
    x:300,    
    y:650,
    width:150, 
    height:7,
    collision:612, 
  };

  var obstacle_2 = {
    x:530,    
    y:600,
    width:100, 
    height:7,
    collision: 562, 
  };

  var obstacle_3 = {
    x:700,    
    y:540,
    width:100, 
    height:7,
    collision:502, 
  };

  var obstacle_4 = {
    x:910,    
    y:600,
    width:150, 
    height:10,
    collision: 562, 
  };

  var obstacle_5 = {
    x:1150,    
    y:550,
    width:100, 
    height:5,
    collision: 512,
  };

  var obstacle_6 = {
    x:1350,    
    y:475,
    width:220, 
    height:8,
    collision: 437, 
  };

  var obstacle_7 = {
    x:1350,    
    y:380,
    width:220, 
    height:8,
    collision: 342,
  };

  var obstacle_8 = {
    x:1100,    
    y:330,
    width:150, 
    height:5,
    collision:292,
  };

  var obstacle_9 = {
    x:850,    
    y:300,
    width:150, 
    height:5, 
    collision: 261,
  };

  var obstacle_10 = {
    x:600,    
    y:270,
    width:150, 
    height:5, 
    collision: 231,
  };

  var obstacle_11 = {
    x:350,    
    y:240,
    width:150, 
    height:5,
    collision: 203,
  }; 

  var obstacle_12 = {
    x:100,    
    y:190,
    width:150, 
    height:5,
    collision: 147, 
  }; 




  var obstacles = [obstacle_1, obstacle_2, obstacle_3, obstacle_4, obstacle_5, obstacle_6, obstacle_7, obstacle_8, obstacle_9, obstacle_10, obstacle_11, obstacle_12];

  //Drawing the obstacles you can stand on.  
  obstacles.forEach(function (obst) {
    context.rect(obst.x, obst.y, obst.width, obst.height);

  //Allows you to stand on an obstacle that you create further down.(1. obstacle)
  if(rectangle.x > obst.x - 30 && rectangle.x < obst.x + obst.width && rectangle.y > obst.y - 30 && rectangle.y < obst.y + 10 - 30){
    rectangle.y = obst.collision;
    rectangle.jumping = false;

  }

  if(rectangle.x > 300 -30 + 75 && rectangle.y > 670){
    rectangle.jumping = true;
  }



 });


   
   
    //Drawing the obstacles you can stand on.
    //context.rect(300, 650, 150, 5);
    //context.rect(600, 650, 100, 5);
    //context.rect(800, 400, 600, 20);
  

    context.fill();
    context.fillstyle = "#202830";
    context.lineWidth = 4;
    context.beginPath();

    context.stroke();  
  
  
    
    
    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);
    
};

var timestamp = 0;
var time = 0;

function timer(){
  time = time + 0.5;
  console.log(time);
  return time;
}
if(timerRunning == true){
timestamp = setInterval(timer, 500);
}

function redirector(){
  location.reload();
  window.location = "scoreboard.view.php?score=" + document.getElementById("hiddenScore").value;
}


window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);


