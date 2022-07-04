import { Container, InteractionEvent, Sprite } from "pixi.js";

export class Scene extends Container {
    private clampy: Sprite;
    constructor(screenWidth: number, screenHeight: number) {
        super();

        this.clampy = Sprite.from("clampy.png");

        this.clampy.anchor.set(0.5);
        this.clampy.x = screenWidth / 2;
        this.clampy.y = screenHeight / 2;
        this.addChild(this.clampy);

        // events that begin with "pointer" are touch + mouse
        this.clampy.on("pointertap", this.onClicky, this);

        // This only works with a mouse
        // this.clampy.on("click", this.onClicky, this);

        // This only work with touch
        // this.clampy.on("tap", this.onClicky, this);

        // Super important or the object will never receive mouse events!
        this.clampy.interactive = true;
    }

    private onClicky(e: InteractionEvent): void {
        this.clampy.scale.x *= 1.25;
        this.clampy.scale.y *= 1.25;
        console.log("You interacted with Clampy!")
        console.log("The data of your interaction is super interesting", e)

        // Global position of the interaction
        // e.data.global

        // Local (inside clampy) position of the interaction
        // e.data.getLocalPosition(this.clampy) 
        // Remember Clampy has the 0,0 in its center because we set the anchor to 0.5!
    }
}