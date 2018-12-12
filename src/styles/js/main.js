var Game = {
    init: function () {
        var myCanvas = document.getElementById("bgCanvas");
        var myCanvas = document.getElementById("bgCanvas");
    }
}







//imports the class SpiritSheet that lays 
//imports the class SpiritSheet from the folder js in the file spiriteSheet.js
import SpriteSheet from './spriteSheet.js';
//imports the function loadImage from the folder js in the file loadImage.js
import {loadImage} from './loadImage.js';

const canvas = document.getElementById('bgCanvas');
const context = canvas.getContext('2d');

context.fillRect(0, 0, 50 ,50);
//Adds the Background and the ground to the canvas.
loadImage('../styles/image/mariotileset.png')
.then(image => {
    const sprites = new SpriteSheet (image, 50, 50);
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
        //for-slope to create a row of gras blocks on that indicates the ground.
        for(let xachsehindernis = 10; xachsehindernis < 15; xachsehindernis++){
            for(let yachsehindernis= 14; yachsehindernis < 15; yachsehindernis++){
                sprites.draw('hindernis', context, xachsehindernis * 50, yachsehindernis * 50);
            }
        }
});