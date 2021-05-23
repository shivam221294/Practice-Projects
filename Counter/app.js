let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let count = parseInt(document.getElementById("num").textContent);
let num = document.querySelector(".num");
btn1.addEventListener("click", function () {
  count += 1;
  num.textContent = count;
});
btn2.addEventListener("click", function () {
    count -=count;
    num.textContent = count;
});
btn3.addEventListener("click", function () {
  if (count >= 1) {
    count -= 1;
    num.textContent = count;
  }
});
