const dropdownMenus = document.querySelectorAll("[data-dropdown]");

dropdownMenus.forEach((menu) => {
  menu.addEventListener("click", cliqueBotao);
  menu.addEventListener("touchstart", cliqueBotao);
});

function cliqueBotao(e) {
  this.classList.toggle("on");
}
