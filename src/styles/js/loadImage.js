//Exports the function loadImage with the parameter of an url.
export function loadImage(url){
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}
