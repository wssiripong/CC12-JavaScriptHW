let score = +prompt("Enter your score");

grade = (score >= 80) ? "Grade A" : (score >= 70) ? "Grade B" : (score >= 60) ? "Grade C" : (score >= 50) ? "Grade D" : "Grade F" ;

alert(grade);