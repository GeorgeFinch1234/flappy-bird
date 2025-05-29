



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

    function pipes(){

        ctx.drawImage(pipeTopImg,PipeXpositon,-300,64,512);
        ctx.drawImage(PipeBottomImg,PipeXpositon,400,64,512 )


    }
    function bird(){
        ctx.drawImage(birdImg,45 ,birdYPositon,34,24 )
        
    }


addEventListener("keydown", ()=>{
birdYPositon = birdYPositon -
 30;
});

function draw(){

    ctx.clearRect(0, 0, 640, 360); // clear canvas
    birdYPositon = birdYPositon +1;

    if(PipeXpositon <=-64 ){
        PipeXpositon = 424
    }else{
    PipeXpositon = PipeXpositon -2;
    }
  

bgImg.src="./assets/flappybirdbg.png"
birdImg.src="./assets/flappybird2.png"

ctx.drawImage(bgImg,0,0)
pipes();
bird();

    window.requestAnimationFrame(draw)
}
draw();
