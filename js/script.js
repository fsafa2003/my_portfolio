const toggle = document.getElementById("modeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};
