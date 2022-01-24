let index = 0;
let progress = document.querySelectorAll(".circle");
let slider = document.getElementById("slider");
console.log(slider);

document.body.addEventListener(
  "click",
  (evt) => {
    if (evt.target.id === "inc" && index < 4) {
      index++;
      console.log(index);
      incProgress(index, progress, slider);
    } else if (evt.target.id === "dec" && index >= 1) {
      index--;
      console.log(index);
      incProgress(index, progress, slider);
    }
  },
  false
);

function incProgress(limit, array, bar) {
  let i = 0;
  array.forEach((element) => {
    element.classList.remove("active");
  });
  while (i <= limit) {
    progress[i].classList.add("active");
    bar.style.setProperty("width", i * 90 + "px");
    i++;
  }
  highlightInput(limit);
}

function highlightInput(count) {
  if (count == 4) {
    document.getElementById("inc").classList.remove("active");
  } else if (count == 0) {
    document.getElementById("dec").classList.remove("active");
  } else {
    document.getElementById("inc").classList.add("active");
    document.getElementById("dec").classList.add("active");
  }
}
