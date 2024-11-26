let button = document.getElementById("btn");
button.addEventListener("click", (e) => {
  let sum = parseInt(e.currentTarget.innerText, 0) + 1;
  e.currentTarget.innerText = sum;
});
