
// SELECTORS
const animateCheck = document.querySelector(".animate_check");
const hideCheck = document.querySelector(".hide_check");
const progressBarCirlce = document.querySelector(".progress_bar-circle");
const inputValueProgressBar = document.querySelector(".input__progress");
const progressBar = document.querySelector(".progress_bar");

const radius = progressBarCirlce.r.baseVal.value;

// получаем длину окружности
const circumference = 2 * Math.PI * radius;

// INIT STATE
progressBarCirlce.style.strokeDasharray = `${circumference} ${circumference}`;
progressBarCirlce.style.strokeDashoffset = circumference;
let progressAnimate = 0;

animateCheck.addEventListener("change", () => {
  if (animateCheck.checked) {
    progressAnimate = setInterval(() => {
      setProgress(inputValueProgressBar.value++, progressAnimate);
    }, 1000);
  } else {
    clearInterval(progressAnimate);
  }
});

hideCheck.addEventListener("change", () => {
  if (hideCheck.checked) {
    progressBar.setAttribute("style", "opacity: 0");
  } else {
    progressBar.setAttribute("style", "opacity: 1");
  }
});

inputValueProgressBar.addEventListener("input", ({ target: t }) => {
  t.value = Math.max(t.min, Math.min(t.max, t.value));
  setProgress(t.value);
});

/**
 * 
 * @param {number} percent 
 * @param {function?} callback 
 */
function setProgress(percent, callback) {
  const offset = circumference - (percent / 100) * circumference;
  progressBarCirlce.style.strokeDashoffset = offset;

  // если передан колбэк с setInterval, то остановим его на позиции 100 
  if (percent >= 99 && callback) {
    clearInterval(callback);
  }
}
