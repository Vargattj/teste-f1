export default function iniciarDropdown() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  dropdownMenus.forEach((menu) => {
    menu.addEventListener("click", cliqueBotao);
  });

  function cliqueBotao() {
    this.classList.toggle("on");
  }
}
