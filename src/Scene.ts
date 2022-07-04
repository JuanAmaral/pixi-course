import { AnimatedSprite, Container, Texture } from "pixi.js";

export class Scene extends Container {

    constructor() {
        console.log("chamando animação");
        super();
        // This is an array of strings, we need an array of Texture
        // const clampyFrames: Array<String> = [
        //   "clampy_sequence_01.png",
        //   "clampy_sequence_02.png",
        //   "clampy_sequence_03.png",
        //   "clampy_sequence_04.png"
        // ];
        let camp_images = 
        [
            "http://localhost:1234/1.png",
            "http://localhost:1234/2.png",
            "http://localhost:1234/3.png"
        ];
        let textureArray = [];
        // `array.map()` creates an array from another array by doing something to each element.
        // `(stringy) => Texture.from(stringy)` means
        // "A function that takes a string and returns a Texture.from(that String)"
        //const animatedClampy: AnimatedSprite = new AnimatedSprite(clampyFrames.map((stringy) => Texture.from(stringy)));
        for (let i=0; i < 3; i++)
        {
            let texture = Texture.from(camp_images[i]);
            textureArray.push(texture);
            console.log("carreguei: " +  i);
        };
        console.log(camp_images)
        console.log(textureArray)
        // (if this javascript is too much, you can do a simple for loop and create a new array with Texture.from())
        const animatedClampy: AnimatedSprite = new AnimatedSprite(camp_images.map((stringy) => Texture.from(stringy)));
        // (if this javascript is too much, you can do a simple for loop and create a new array with Texture.from())

        this.addChild(animatedClampy); // we just add it to the scene
        // Now... what did we learn about assigning functions...
        animatedClampy.onFrameChange = this.onClampyFrameChange.bind(this);
        animatedClampy.animationSpeed = 1/30; 
        animatedClampy.play();
    }

    private onClampyFrameChange(currentFrame : any): void {
        console.log("Clampy's current frame is", currentFrame);
    }
  
}