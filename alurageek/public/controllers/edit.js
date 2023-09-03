import { getProductById, updateProduct, isEmpty } from "../app.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");

//Inputs
const name = document.getElementById("name");
const imageUrl = document.getElementById("imageUrl");
const description = document.getElementById("description");
const category = document.getElementById("category");
const brand = document.getElementById("brand");
const stock = document.getElementById("stock");
const price = document.getElementById("price");
const features = document.getElementById("features");

const img = document.querySelector("img");

const getInfoProduct = async () => {
  try {
    const product = await getProductById(id);

    name.value = product.name;

    img.src = `${product.imageUrl}`;
    img.alt = product.name;

    imageUrl.value = product.imageUrl;
    description.value = product.description;
    category.value = product.category;
    brand.value = product.brand;
    stock.value = product.stock;
    price.value = product.price;
    features.value = product.features;
  } catch (err) {
    console.log(err);
  }
};

// Formulario
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  updateProduct(id, {
    name: name.value,
    imageUrl: imageUrl.value,
    description: description.value,
    category: category.value,
    brand: brand.value,
    stock: stock.value,
    price: price.value,
    features: features.value.split(","),
  });
});

getInfoProduct();

// Back
document.addEventListener("DOMContentLoaded", () => {
  const back = document.getElementById("back");

  back.addEventListener("click", () => {
    location.replace("./product.html");
  });
});
