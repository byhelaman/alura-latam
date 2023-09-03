// Back
document.addEventListener("DOMContentLoaded", () => {
  const back = document.getElementById("back");

  back.addEventListener("click", () => {
    history.back();
  });
});
