function preload() {
	world_start = loadSound("world_start.wav");
	 coin = loadSound("coin.wav")
	 mario_kick = loadSound("kick.wav")
	 mario_jump = loadSound("jump.wav")
	 mario_die = loadSound("mariodie.wav")
	 game_over = loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}


function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(799,400)
	video.parent('game_console')
	posenet = ml5.poseNet(video,modelloaded)
	posenet.on('pose',gotposes)
}


function draw() {
	game()
}


function modelloaded(){
	console.log("model is loaded")
}


function gotposes(results){
if (results.length>0) {
	console.log(results)
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
}
}






