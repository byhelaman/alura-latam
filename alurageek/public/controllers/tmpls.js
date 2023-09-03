// Caroucel template
export const productTmpl = (obj) => {
  const card = document.createElement("li");

  let tmpl = `
    <img src="${obj.imageUrl}" alt="${obj.name}" />
    <h4>${obj.name}</h4>
    <span>${obj.stock > 1 ? `Stock: ${obj.stock}` : "Sin Stock"}</span>
    <span>${obj.price}</span>
    <a href="./views/product.html?id=${obj.id}">Show product</a>
  `;

  card.innerHTML = tmpl;
  card.dataset.id = obj.id;
  card.classList.add("splide__slide");

  return card;
};

// Category template
export const categoryTmpl = (obj) => {
  const card = document.createElement("div");

  let tmpl = `
    <img src="${obj.imageUrl}" alt="${obj.name}" />
    <h4>${obj.name}</h4>
    <span>${obj.stock > 1 ? `Stock: ${obj.stock}` : "Sin Stock"}</span>
    <span>${obj.price}</span>
    <a href="./product.html?id=${obj.id}">Show product</a>
  `;

  card.innerHTML = tmpl;
  card.dataset.id = obj.id;

  return card;
};

// Edit template
export const editTmpl = (obj) => {
  const card = document.createElement("div");

  let tmpl = `
    <img src="${obj.imageUrl}" alt="${obj.name}" />
    <h4>${obj.name}</h4>
    <span>${obj.stock > 1 ? `Stock: ${obj.stock}` : "Sin Stock"}</span>
    <span>${obj.price}</span>
    <a href="./edit.html?id=${obj.id}">Edit</a>
    <a href="">Delete</a>
  `;

  card.innerHTML = tmpl;
  card.dataset.id = obj.id;

  return card;
};

export const viewProductTmpl = (obj) => {
  const card = document.createElement("div");

  let tmpl = `
    <img src="${obj.imageUrl}" alt="${obj.name}" />
    <h4>${obj.name}</h4>
    <p>${obj.description}</p>
    <p>${obj.category}</p>
    <p>${obj.brand}</p>
    <span>${obj.stock > 1 ? `Stock: ${obj.stock}` : "Sin Stock"}</span>
    <span>${obj.price}</span>
    <ul>
      ${obj.features.map((value) => `<li>${value}</li>`).join("")}
    </ul>
  `;

  card.innerHTML = tmpl;
  card.dataset.id = obj.id;

  return card;
};

// Similar product template
export const similarProductTmpl = (obj) => {
  const card = document.createElement("li");

  let tmpl = `
    <img src="${obj.imageUrl}" alt="${obj.name}" />
    <h4>${obj.name}</h4>
    <span>${obj.stock > 1 ? `Stock: ${obj.stock}` : "Sin Stock"}</span>
    <span>${obj.price}</span>
    <a href="./product.html?id=${obj.id}">Show product</a>
  `;

  card.innerHTML = tmpl;
  card.dataset.id = obj.id;
  card.classList.add("splide__slide");

  return card;
};

// Contenedor de productos similares
export const similarProductsContainer = (category) => {
  const div = document.createElement("div");

  const tmpl = `
    <div class="title">
      <h3>Similar Products</h3>
      <a href="./category.html?category=${category}">View all →</a>
    </div>
    <div class="splide spl-sim">
      <div class="splide__track">
        <ul class="splide__list"></ul>
      </div>
    </div>
  `;

  div.innerHTML = tmpl;

  return div;
};
