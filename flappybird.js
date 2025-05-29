



const canvas = document.getElementById("flappybirdCanvas");
const ctx = canvas.getContext("2d");
const bgImg= new Image;
    const birdImg = new Image;

    const pipeTopImg = new Image;
    pipeTopImg.src="./assets/toppipe.png"
    const PipeBottomImg = new Image;
    PipeBottomImg.src="./assets/bottompipe.png"  

    let PipeXpositon = 200;

    let birdYPositon=320;
//need as need access to know if hit or not
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
    height:512
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


addEventListener("keydown", ()=>{
bird.y = bird.y -
 40;
});

function detectColision(a, b){
//so if in front or behind it

//so knows when in between the pipes
if(a.x < b.x+b.width && a.x + a.width > b.x) {

  
    // so if in position to hit it, now see if in gap or not.
return a.y < b.yPositonLower - 188 || a.y > b.yPositonLower;



a.y < b.YPositonHigher && a.y+height > b.yPositonLower; // so if below it and above it
}else{
    return false
}



}


function draw(){


if(detectColision(bird,pipeOne)){
    console.log("hit");
}

    ctx.clearRect(0, 0, 640, 360); // clear canvas


   
    if( bird.y>616){

    }else{

    bird.y = bird.y +1;
    }
    if(pipeOne.x <=-64 ){
        pipeOne.x = 424
    }else{
    pipeOne.x = pipeOne.x -2;
    }
  

bgImg.src="./assets/flappybirdbg.png"
birdImg.src="./assets/flappybird2.png"

ctx.drawImage(bgImg,0,0)
pipes();
birdDraw();

    window.requestAnimationFrame(draw)
}
draw();
