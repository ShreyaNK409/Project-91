person1=""
person2=""

function adduser()
{
   person1=document.getElementById("player1").value;
   person2=document.getElementById("player2").value;
   localStorage.setItem("player1",person1);
   localStorage.setItem("player2",person2);
   window.location="quiz_game_page.html";
}