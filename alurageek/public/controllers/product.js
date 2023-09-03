import { showData, showProducts } from "../app.js";
import { productTmpl } from "./tmpls.js";

// Contenedores
const accesories = document.getElementById("prods-accs");
const consoles = document.getElementById("prods-conss");
const gadgets = document.getElementById("prods-gdgets");

(async () => {
  try {
    const data = await showData();

    showProducts(data, "Accesorios", 6, productTmpl, accesories);
    showProducts(data, "Consolas", 6, productTmpl, consoles);
    showProducts(data, "Gadgets", 6, productTmpl, gadgets);
  } catch (err) {
    console.error(err);
  }

  splideAcss.mount();
  splideConss.mount();
  splideGdgets.mount();
})();

// Configuración personalizada del carrusel
const obj = {
  arrows: false,
  pagination: false,
  perPage: 6,
  gap: "3rem",
  // drag: false,
  breakpoints: {
    1400: { perPage: 4 },
    1200: { perPage: 3 },
    768: { perPage: 2 },
    576: { perPage: 1 },
  },
};

// Inicialización de los carruseles
const splideAcss = new Splide(".splide.spl-acss", obj);
const splideConss = new Splide(".splide.spl-conss", obj);
const splideGdgets = new Splide(".splide.spl-gdgets", obj);

() => {
  // Back
  document.addEventListener("DOMContentLoaded", () => {
    const back = document.getElementById("back");

    back.addEventListener("click", () => {
      history.back();
    });
  });
};
