function preload(){
mustache=loadImage('https://i.postimg.cc/bN6pT2pX/mustache.jpg')



}
function setup(){
canvas=createCanvas(500,500);
video=createCapture(VIDEO);
video.hide()
posenet = ml5.poseNet(video,modelLoaded);//initializes the model
posenet.on('pose',gotPoses);//applies the model
}

function draw(){
image(video,0,0,500,500)
image(mustache,noseX-120,noseY,75,75)
}

function modelLoaded(){
console.log("posenet model is loaded")    
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y
        console.log("nose x="+noseX+" nose y="+noseY)

    }
        

}

noseX=0
noseY=0