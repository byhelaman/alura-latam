import { showData, showProducts, getProductById } from "../app.js";
import {
  categoryTmpl,
  editTmpl,
  viewProductTmpl,
  similarProductsContainer,
  similarProductTmpl,
} from "./tmpls.js";

// Contenedores
const root = document.getElementById("root");
const wrpProds = document.getElementById("wrp-prods");

// Obtener la categoría de la URL
const url = new URL(location);
const category = url.searchParams.get("category");

// Obtener el ID del producto de la URL
const id = url.searchParams.get("id");

// Establecer el título de la página
const pageTitle = document.querySelector("h1");
pageTitle.innerText = category ? category : pageTitle.textContent;

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

(async () => {
  try {
    // Obtener los datos iniciales
    const data = await showData();

    if (id) {
      // Mostrar el producto seleccionado
      const product = await getProductById(id);
      showProducts([product], "", 0, viewProductTmpl, root);

      // Crear un contenedor para productos similares
      const spc = similarProductsContainer(product.category);
      const list = spc.querySelector(".splide__list");

      // Filtrar productos similares en base a la categoría del producto seleccionado
      const similarProductsData = data.filter((p) => p.id !== product.id);
      showProducts(
        similarProductsData,
        product.category,
        0,
        similarProductTmpl,
        list
      );

      // Agregar el contenedor de productos similares al DOM
      wrpProds.appendChild(spc);

      // Configurar y mostrar el carrusel de productos similares
      const splideSim = new Splide(".splide.spl-sim", obj);
      splideSim.mount();
    } else {
      // Mostrar productos en función de la categoría
      const tmpl = category ? categoryTmpl : editTmpl;
      showProducts(data, category, 0, tmpl, root);
    }
  } catch (err) {
    console.error(err);
  }
})();

// Back
document.addEventListener("DOMContentLoaded", () => {
  const back = document.getElementById("back");
  back.addEventListener("click", () => {
    location.replace("../index.html");
  });
});
