import { Application } from 'pixi.js'
import { Scene } from './Scene'; // This is the import statement

const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x6495ed,
    width: 1024,
    height: 480
});

// pass in the screen size to avoid "asking up"
const sceny: Scene = new Scene();

app.stage.addChild(sceny)