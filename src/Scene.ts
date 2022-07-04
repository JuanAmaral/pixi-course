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
        let camp_images = ["rav.png","rav2.png","clampy.png","rav2.png"];
        let textureArray = [];
        // `array.map()` creates an array from another array by doing something to each element.
        // `(stringy) => Texture.from(stringy)` means
        // "A function that takes a string and returns a Texture.from(that String)"
        //const animatedClampy: AnimatedSprite = new AnimatedSprite(clampyFrames.map((stringy) => Texture.from(stringy)));
        for (let i=0; i < 4; i++)
        {
            let texture = Texture.from(camp_images[i]);
            textureArray.push(texture);
            console.log("carreguei: " +  i);
        };
        // (if this javascript is too much, you can do a simple for loop and create a new array with Texture.from())
        let animatedSprite = new AnimatedSprite(textureArray);

        this.addChild(animatedSprite); // we just add it to the scene
        // Now... what did we learn about assigning functions...
        animatedSprite.onFrameChange = this.onClampyFrameChange.bind(this);
    }

    private onClampyFrameChange(currentFrame : any): void {
        console.log("Clampy's current frame is", currentFrame);
    }
}