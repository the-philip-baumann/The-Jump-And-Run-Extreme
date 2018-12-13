//imports the class SpiritSheet from the folder js in the file spiriteSheet.js
import SpriteSheet from './spriteSheet.js';
//imports the function loadImage from the folder js in the file loadImage.js
import {loadImage} from './loadImage.js';

var context, controller, rectangle, loop;
//creates the canvas and allows the user to talkt to the canvas.
context = document.querySelector("canvas").getContext("2d");
//Gives the canvas the property of 840 pixel of height
context.canvas.height = 840;
//Gives the canvas the property of 1600 pixel of width. 
context.canvas.width = 1600;

rectangle = {

  height:50, //height of the character.
  jumping:true,
  width:50, //width of the character.
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



loop = function() {

//Adds the Background and the ground to the canvas.
loadImage('../styles/image/mariotileset.png')
.then(image => {
    const sprites = new SpriteSheet (image, 50, 50);
    //Defines were to find the image on the mariotileset.png image 
        sprites.define('ground', 0 , 0);
        sprites.define('sky', 16, 2 );
        sprites.define('hindernis', 0, 10);

        //for-slope to fill the 'sky' with several blue pains.
        for(let xachse = 0; xachse < 50; xachse++){
            for(let yachse = 0; yachse < 19; yachse++){
                sprites.draw('sky', context, xachse * 50, yachse * 50);    
            }
        }
        //for-slope to make ground
        for(let xachse = 0; xachse < 50; xachse++){
            for(let yachse = 16; yachse < 17; yachse++){
                sprites.draw('ground', context, xachse * 50, yachse * 50);    
            }
        }

});


    //When player pressed the spacebar it checks if button was pressed and if the character isnt already jumping.
  if (controller.up && rectangle.jumping == false) {
    //Its minus -50 since y_velocity begins at the border on the top. 
    rectangle.y_velocity -= 50;
    rectangle.jumping = true;

  }

  if (controller.left) {
    //Speed gets decreased by 0.5 when button: left arrow; is pressed.
    rectangle.x_velocity -= 0.5;

  }

  if (controller.right) {
    //The speed gets increased by 0.5 when button: right arrow; is pressed.
    rectangle.x_velocity += 0.5;

  }

  if(controller.right && controller.space){
      //If buttons: right arrow, spacebar; is pressed it increased the speed by another 1 (Turbo).
      rectangle.x_velocity += 1;
  }


 

  rectangle.y_velocity += 1; //This speed of which defines how fast the creature gets back to the floor.
  rectangle.x += rectangle.x_velocity;
  rectangle.y += rectangle.y_velocity;
  rectangle.x_velocity *= 0.9;// Basically acts like the friction.
  rectangle.y_velocity *= 0.9;// Basically acts like the friction.

  // If the character is falling below the floor this prevents it from falling further down.
  if (rectangle.y > 800 - 16 - 32) {

    rectangle.jumping = false;
    rectangle.y = 800 - 16 - 32;
    rectangle.y_velocity = 0;

  }

  // If character disappears on the left side of the screen it will give you a Game over alert.
  if (rectangle.x < -32) {



  } else if (rectangle.x > 10000) {// Marks the finishline of the game. If reached it will give you an Congratulations alert.

    windows.alert("Congratulations");

  }
  
  if(rectangle.x > 300 - 16 - 32 && rectangle.x < 500 && rectangle.y > 600 - 16 -32 && rectangle.y <620 - 16 -32){
    rectangle.y = 550;
    rectangle.jumping = false;
  }else if(rectangle.x > 300 - 16 -32 && rectangle.x < 500 && rectangle.y > 600){
    windows.alert("Hallo!");
  }

  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.rect(300, 600, 200, 20);
  context.rect(600, 600, 200, 20);
  context.rect(450, 400, 200, 20);
  context.rect(300, 200, 200, 20);

  context.fill();
  context.strokeStyle = "#202830";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(1500, 800);
  context.lineTo(0, 800);
  context.stroke();  
;
 
  

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);


