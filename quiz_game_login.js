player1name=localStorage.getItem("person1");
player2name=localStorage.getItem("person2");
document.getElementById("player1_name").innerHTML=player1name+":";
document.getElementById("player2_name").innerHTML=player2name+":";
document.getElementById("player1_score").innerHTML=score1;
document.getElementById("player2_score").innerHTML=score2;
var number_1=0;
var number_2=0;
actual_answer=0
document.getElementById("player_question").innerHTML="questionturn="+player1name;
document.getElementById("player_answer").innerHTML="answerturn="+player2name;

function send()
{
 number_1=document.getElementById("number1").value;
 number_1=document.getElementById("number1").value;
 actual_answer=parseInt(number_1)*parseInt(number_2);
 }

 question_number="<h4>"+number_1+"X"+number_2+"</h4>";
 input_box="<br>Answer:<input type='text' id='input_checkbox'>";
 check_button="<br><br><button class='btn-btn-info' onclick='check()'>Check</button>";
 row= question_number + input_box+check_button;
 document.getElementById("output").innerHTML=row;
 document.getElementById("number1").value="";
 document.getElementById("number2").value="";