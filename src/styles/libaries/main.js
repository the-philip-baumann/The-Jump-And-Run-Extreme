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
      rectangle.x_velocity -= 0.2;

    }

    if (controller.right) {
      //The speed gets increased by 0.5 when button: right arrow; is pressed.
      rectangle.x_velocity += 0.2;

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
      if(rectangle.x > 300 - 30 && rectangle.x < 450 && rectangle.y > 650 - 30 && rectangle.y < 660 - 30){
        rectangle.y = 620;
        rectangle.jumping = false;

      }
      
        //(2. obstacle)
    if(rectangle.x > 600 - 30 && rectangle.x < 700 && rectangle.y > 650  - 30 && rectangle.y < 660 - 30){
      rectangle.y = 620;
      rectangle.jumping = false;
      
    }

    context.beginPath();
    context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fillstyle = "red";
    //Drawing the obstacles you can stand on.
    context.rect(300, 650, 150, 5);
    context.rect(600, 650, 100, 5);
    context.rect(800, 400, 600, 20);
  

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


window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);


