
const canvas = document.getElementById("flappybirdCanvas");
const ctx = canvas.getContext("2d");

const bgImg = new Image;
const birdImg = new Image;
const pipeTopImg = new Image;
const PipeBottomImg = new Image;


pipeTopImg.src = "./assets/toppipe.png"
PipeBottomImg.src = "./assets/bottompipe.png"
bgImg.src = "./assets/flappybirdbg.png"
birdImg.src = "./assets/flappybird2.png"

let PipeXpositon = 200;
let score = 0;
let birdYPositon = 320;
let gameover = false;
let raf;




//need as need access to know if hit or not
let bird = {
    x: 45,
    y: 320,
    width: 34,
    height: 24
}
class pipe {
    constructor() {

        this.x = 200;
        this.width = 64;
        this.yPositonLower = 400;
        this.YPositonHigher = -300;
        this.height = 512;
        this.passed = false;
        this.xIntialPostion;
    }
}
const pipes = [new pipe(), new pipe(), new pipe()]
//so they don't all start at same time.
pipes[0].xIntialPostion = 200;
pipes[1].xIntialPostion = 380;
pipes[2].xIntialPostion = 560;
pipes[0].x = 200;
pipes[1].x = 370;
pipes[2].x = 540;



function pipesDraw() {
    

    pipes.forEach(p => {

        ctx.drawImage(pipeTopImg, p.x, p.YPositonHigher, p.width, p.height);
        ctx.drawImage(PipeBottomImg, p.x, p.yPositonLower, p.width, p.height);

    })



}
function birdDraw() {
    ctx.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height)

}

addEventListener("keydown", () => {
    if (gameover) {
        gameover = false;
        // recenter it
        bird.y = 320;
        //640 = game hight, 212 = pipe gap plus bird height
        let random = Math.random() * (640 - 212);

        pipes.forEach(x => {
            x.x = x.xIntialPostion;
            x.YPositonHigher = random - x.height;
            x.yPositonLower = random + 188;
            x.passed = false;
        })

        score = 0;

       raf= window.requestAnimationFrame(draw)

    }
    //moves bird up
    bird.y = bird.y - 50;
});

function detectColision(a, b) {
    

    //so knows when in between the pipes
    if (a.x < b.x + b.width && a.x + a.width > b.x) {


        // tells if hit it or not
        return a.y < b.yPositonLower - 188 || a.y > b.yPositonLower;
        //188 = gap



    } else {
        return false
    }



}
//to determeine if they passed and if they should get a point
function PointerEvent(bird, pipe) {
    if (bird.x > pipe.x + bird.width && !pipe.passed) {
        pipe.passed = true
        score = score + 1;
    }

}
function draw() {
 
    pipes.forEach(p => {
        PointerEvent(bird, p);
        if (detectColision(bird, p)) {
            gameover = true;
        }
    })


    ctx.clearRect(0, 0, 640, 360); // clear canvas



    if (bird.y > 616 || bird.y < 1   ) {
        gameover = true
    } else {

        bird.y = bird.y + 2  ;
    }
    pipes.forEach(p => {
        if (p.x <= -64) {
            //taking away the gap plus the bird to get 212
            let random = Math.random() * (640 - 212);
            p.YPositonHigher = random - p.height; // so goes to top
            p.yPositonLower = random + 188;


            p.yPositonLower = random + 188;
            p.x = 424
            p.passed = false;
        } else {
            p.x = p.x - 2 ;
        }

    })




    ctx.drawImage(bgImg, 0, 0)
    pipesDraw()
    birdDraw()

//score 
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.font = "20px Arial"
    ctx.fillText(score, 10, 30);



    raf = window.requestAnimationFrame(draw);
    if (gameover) {
        window.cancelAnimationFrame(raf);
        
    }
}
raf = window.requestAnimationFrame(draw)
