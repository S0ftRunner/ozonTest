const animateCheck = document.querySelector(".animate_check");
const hideCheck = document.querySelector(".hide_check");
const progressBar = document.querySelector(".progress_bar");
const inputValueProgressBar = document.querySelector(".input__progress");

animateCheck.addEventListener("change", () => {
  animateCheck.checked;
  console.log(animateCheck.checked);
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
});
