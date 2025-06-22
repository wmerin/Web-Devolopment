var buttonColors = ["red","blue","green","yellow"];

var gamePattern=[];

var userClickedPattern=[];

var started=false;

var level=0;

$(document).keydown(function()
{if(!started){
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;}
});

function nextSequence(){

    userClickedPattern=[];
    
    $("#level-title").text("Level "+level);
    level++;

    var randomNumber= Math.floor(Math.random()*4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("."+randomChosenColor).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();

}


$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");

    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    },100);
}

function playSound(currColor){
    var audio = new Audio("sounds/" + currColor + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel){
         
     if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){

        if(gamePattern.length===userClickedPattern.length){
            console.log("success");

            setTimeout(function(){
                nextSequence();
            },1000);
        }
     }
     else{
        console.log("wrong");

        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("#level-title").text("Game Over, Press Any Key To Restart");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startOver();

     }
}

function startOver(){
            level=0;
            gamePattern=[];
            started=false;
        }