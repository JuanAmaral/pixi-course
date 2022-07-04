import { Application, Sprite, Container  } from 'pixi.js'
import { ShockwaveFilter, GlowFilter } from 'pixi-filters'
import { Scene } from './Scene';
const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
  autoDensity: true,
    backgroundColor: 0x6495ed,
    width: 800,
    height: 500
});

const conty: Container = new Container();
conty.x = 0;
conty.y = 0;
app.stage.addChild(conty);

const clampy: Sprite = Sprite.from("rav2.png");
clampy.x = 0;
clampy.y = 0;
conty.addChild(clampy);

const clampy2: Sprite = Sprite.from("rav2.png");
clampy2.anchor.set(0.5);
clampy2.x = app.screen.width /2 ;
clampy2.y = app.screen.height /2 ;
conty.addChild(clampy2);

const clampy3: Sprite = Sprite.from("rav2.png");
clampy3.anchor.set(0.5);
clampy3.x = 200 ;
clampy3.y = 50;
conty.addChild(clampy3);

// const myBlurFilter = new GlowFilter();
// myBlurFilter.enabled = true;
// myBlurFilter.innerStrength = 5;
// clampy.filters = [myBlurFilter];

const myShockwaveFilter = new ShockwaveFilter();
myShockwaveFilter.enabled = true;
myShockwaveFilter.padding = 1;

clampy.filters = [myShockwaveFilter];


const myBlurFilter = new GlowFilter();
myBlurFilter.enabled = true;
myBlurFilter.color = 1
clampy2.filters = [myBlurFilter];


// const sceny: Scene = new Scene(app.screen.width, app.screen.height);
// app.stage.addChild(sceny)

// const myGlithFilter = new GlitchFilter();
// myGlithFilter.enabled = true;
// myGlithFilter.seed = 0.1;
// myGlithFilter.slices = 2;
// myGlithFilter.fillMode  = 3;
// myGlithFilter.direction = 0;
// myGlithFilter.red = [5,5]
// clampy2.filters = [myGlithFilter];

