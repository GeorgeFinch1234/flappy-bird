



const canvas = document.getElementById("flappybirdCanvas");
const ctx = canvas.getContext("2d");
const bgImg= new Image;
    const birdImg = new Image;
let gameover = false;
    const pipeTopImg = new Image;
    pipeTopImg.src="./assets/toppipe.png"
    const PipeBottomImg = new Image;
    PipeBottomImg.src="./assets/bottompipe.png"  

    let PipeXpositon = 200;
let score = 0;
    let birdYPositon=320;
//need as need access to know if hit or not
//taken from mdn
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


let bird = { 
    x : 45,
    y : 320,
    width : 34,
    height : 24
}
let pipeOne = { 
    x:200,
    width:64,
    yPositonLower:400,
    YPositonHigher:-300,
    height:512,
    passed:false
}
let pipetwo = { 
    x:200,
    width:64,
    yPositonLower:400,
    YPositonHigher:-300,
    height:512
}
let pipeThree = { 

    x:200,
    width:64,
    yPositonLower:400,
    YPositonHigher:-300,
    height:512
}

    function pipes(){

        ctx.drawImage(pipeTopImg,pipeOne.x,pipeOne.YPositonHigher,pipeOne.width,pipeOne.height);
        ctx.drawImage(PipeBottomImg,pipeOne.x,pipeOne.yPositonLower,pipeOne.width,pipeOne.height );


    }
    function birdDraw(){
        ctx.drawImage(birdImg,bird.x ,bird.y,bird.width,bird.height )
        
    }
function gameStart(){
    bird.x = 45;
    bird.y = 320;
    bird.width = 34;
    bird.height = 24;

}

addEventListener("keydown", ()=>{
if(gameover){
    gameover = false;
    bird.y=320 ;
    let random =  Math.random()*(640-212) ;
    pipeOne.YPositonHigher= random - pipeOne.height; // so goes to top
    pipeOne.yPositonLower = random + 188;
score = 0;  

pipeOne.yPositonLower = random + 188;
     pipeOne.x = 424
     pipeOne.passed = false; 
    window.requestAnimationFrame(draw)


}
    bird.y = bird.y -
 40;
});

function detectColision(a, b){
//so if in front or behind it

//so knows when in between the pipes
if(a.x < b.x+b.width && a.x + a.width > b.x) {

  
    // so if in position to hit it, now see if in gap or not.
return a.y < b.yPositonLower - 188 || a.y > b.yPositonLower;
//188 = gap



}else{
    return false
}



}


function draw(){




    if(bird.x > pipeOne.x+pipeOne.width&&!pipeOne.passed)
    {
pipeOne.passed = true
score = score +1;
    }
if(detectColision(bird,pipeOne)){
    gameover=true;      
}

    ctx.clearRect(0, 0, 640, 360); // clear canvas


   
    if( bird.y>616){

    }else{

    bird.y = bird.y +1;
    }
    if(pipeOne.x <=-64 ){
        //taking away the gap plus the bird to get 212
       let random =  Math.random()*(640-212) ;
       pipeOne.YPositonHigher= random - pipeOne.height; // so goes to top
       pipeOne.yPositonLower = random + 188;


pipeOne.yPositonLower = random + 188;
        pipeOne.x = 424
        pipeOne.passed = false; 
    }else{
    pipeOne.x = pipeOne.x -2;
    }
  

bgImg.src="./assets/flappybirdbg.png"
birdImg.src="./assets/flappybird2.png"

ctx.drawImage(bgImg,0,0);
ctx.fillStyle="rgb(0, 0, 0)";
ctx.font="20px Arial"
ctx.fillText(score,10,30);
pipes();
birdDraw();
if(!gameover){
    window.requestAnimationFrame(draw)
}
}
window.requestAnimationFrame(draw)
