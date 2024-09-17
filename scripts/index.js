const animateCheck = document.querySelector(".animate_check");
const hideCheck = document.querySelector(".hide_check");
const progressBar = document.querySelector(".progress_bar");

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
