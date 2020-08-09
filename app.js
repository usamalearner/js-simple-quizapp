function result(){
    var score = 0;
   var rightans1 = document.getElementById('q1a1');
   if(rightans1.checked == true){
       score++
       alert("Question 1 right")
   }
   else{
       alert("question 1 wrong")
   }
  
   
   var rightans2 = document.getElementById('q2a2');
   if(rightans2.checked == true){
       score++
       alert("Question 2 right")
   }
   else{
       alert("question 2 wrong")
   }


   var rightans3 = document.getElementById('q3a3');
   if(rightans3.checked == true){
       score++
       alert("Question 3 right")
   }
   else{
       alert("question 3 wrong")
   }
   alert("your score is  " + score)
}