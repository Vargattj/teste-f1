export default function iniciarMenu() {
  let show = true;

  const categorias = document.querySelector(".categorias");
  const menuToggle = document.querySelector(".menu-burguer");

  menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial";
    categorias.classList.toggle("on", show);
    show = !show;
  });

  categorias.addEventListener("click", (e) => {
    if (e.target === categorias) {
      categorias.classList.remove("on", show);
    }
    document.body.style.overflow = show ? "innital" : "initial";
    show = !show;
  });
}
