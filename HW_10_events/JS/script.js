document.addEventListener("keydown", function(event) {
  document.getElementById(event.code).play();
});
document.addEventListener("click", function(event) {
  document.getElementById("Key" + event.target.id).play();
});
