var currentcolor;
var clickedId;
var btn=["red","yellow","green","blue"];

var userclicked=[];
var gamepattern=[];



var level=0;
var started=false;


$(document).keypress(function(){
  if(!started)
  {
    $("#level-title").text("level "+level);
  nextSequence();
  started=true;
}
});
$(".btn").click(function() {

     clickedId= $(this).attr("id");
     userclicked.push(clickedId);
     sound(clickedId);
     animatePress(clickedId);
     checkAnswer(userclicked.length-1);

   });

   function checkAnswer(currentLevel)
   {
     if(gamepattern[currentLevel]===userclicked[currentLevel])
     {
       console.log(gamepattern);
       console.log(userclicked);
       if(gamepattern.length===userclicked.length)
       {
         console.log("success");
         setTimeout(function(){
           nextSequence();
         },1000);
      }
    }

     else {
       console.log("wrong");
       console.log(userclicked);
       console.log(gamepattern);
       sound("wrong");
       $("body").addClass("game-over");
       $("#level-title").text("Game Over,press Any Key to restart");
       setTimeout(function(){
         $("body").removeClass("game-over");
       },200);


        startOver();
     }
   }



function nextSequence()
{
  userclicked=[];
  level++;
  $("h1").text("level "+level);

  var randomno=Math.floor(Math.random()*3);
  randombox=btn[randomno];
  gamepattern.push(randombox);
  var selected=$("#"+randombox);
  selected.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  sound(randombox);
}


function sound(key)
{

    var audio=new Audio("simonsound/"+key+".mp3");
    audio.play();


}
function animatePress(currentcolor)
{
  $("#"+currentcolor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentcolor).removeClass("pressed")
  },100);
}
function startOver()
{
  level=0;
  started=false;
  gamepattern=[];

}
