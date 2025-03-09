// animation increment when scroll

let stats = document.querySelector(".stats");
let statNum = document.querySelectorAll(".stats .stat .number");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      statNum.forEach((ele) => startCount(ele));
    }
    started = true;
  }
};

function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
