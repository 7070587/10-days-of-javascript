let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", (e) => {
  let value4 = document.getElementById("btn4").innerHTML;
  let value1 = document.getElementById("btn1").innerHTML;
  let value2 = document.getElementById("btn2").innerHTML;
  let value3 = document.getElementById("btn3").innerHTML;
  let value6 = document.getElementById("btn6").innerHTML;
  let value9 = document.getElementById("btn9").innerHTML;
  let value8 = document.getElementById("btn8").innerHTML;
  let value7 = document.getElementById("btn7").innerHTML;

  document.getElementById("btn4").innerHTML = value7;
  document.getElementById("btn1").innerHTML = value4;
  document.getElementById("btn2").innerHTML = value1;
  document.getElementById("btn3").innerHTML = value2;
  document.getElementById("btn6").innerHTML = value3;
  document.getElementById("btn9").innerHTML = value6;
  document.getElementById("btn8").innerHTML = value9;
  document.getElementById("btn7").innerHTML = value8;
});
