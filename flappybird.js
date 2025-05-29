



const canvas = document.getElementById("flappybirdCanvas");
const ctx = canvas.getContext("2d");
const bgImg= new Image;
    const birdImg = new Image;

function draw(){

    ctx.clearRect(0, 0, 640, 360); // clear canvas

    

bgImg.src="./assets/flappybirdbg.png"
birdImg.src="./assets/flappybird2.png"

ctx.drawImage(bgImg,0,0)
ctx.drawImage(birdImg,45 ,320,34,24 )

    window.requestAnimationFrame(draw)
}
draw();
