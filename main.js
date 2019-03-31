function check(){
  var q1 = document.quiz.q1.value;

  if (q1 == "예술") {
    alert('짝짝짝! 정답입니다.')
    window.open('q2.html')
  }
  else {
    alert('틀렸습니다! 다시 하세요')
    location.href='q1.html';
  }

  var q2 = document.quiz.q2.value;

  if (q2 == "랩") {
    alert('짝짝짝! 정답입니다.')
    window.open('q3.html')
  }
  else {
    alert('틀렸습니다! 다시 하세요')
    location.href='q2.html';
  }

}
