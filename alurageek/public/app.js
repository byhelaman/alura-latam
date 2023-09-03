// Fetch API
export const showData = async () => {
  try {
    const response = await fetch(
      "https://alurageek-8zx7.onrender.com/products"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(
      `https://alurageek-8zx7.onrender.com/products/${id}`
    );

    if (!response.ok) {
      throw new Error("Error getting product");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.error("Error getting product:", err);
    throw err;
  }
};

export const createProduct = async (obj) => {
  try {
    const response = await fetch(
      "https://alurageek-8zx7.onrender.com/products",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: uuid.v4(),
          name: isEmpty(obj.name),
          imageUrl: isSource(obj.imageUrl),
          category: isEmpty(obj.category),
          stock: isEmpty(obj.stock),
          price: isEmpty(obj.price),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Error creating product");
    }

    return response;
  } catch (err) {
    console.error("Error creating product:", err);
    throw err;
  }
};

export const updateProduct = async (id, obj) => {
  try {
    const response = await fetch(
      `https://alurageek-8zx7.onrender.com/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: isEmpty(obj.name),
          imageUrl: validateSource(obj.imageUrl),
          description: isEmpty(obj.description),
          category: isEmpty(obj.category),
          brand: isEmpty(obj.brand),
          stock: isEmpty(obj.stock),
          price: isEmpty(obj.price),
          features: obj.features,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Error updating product");
    }

    return response;
  } catch (err) {
    console.error("Error updating product:", err);
    throw err;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(
      `https://alurageek-8zx7.onrender.com/products/${id}`,
      {
        method: "DELETE",
      }
    );
  } catch (err) {
    console.error("Error deleting product:", err);
    throw err;
  }
};

export const isEmpty = (value) => {
  return value === undefined || value === null || value === "" ? "" : value;
};

const validateSource = (value) => {
  return value === undefined || value === null || value === ""
    ? "https://i.postimg.cc/SKn9DFxq/no-product.png"
    : value;
};

export const showProducts = (
  api,
  categoryName,
  maxProducts,
  template,
  container
) => {
  const productsToShow = categoryName
    ? api.filter((product) => product.category === categoryName)
    : api;

  const limitedProducts = maxProducts
    ? productsToShow.splice(0, maxProducts)
    : productsToShow;

  limitedProducts.forEach(
    ({
      id,
      name,
      imageUrl,
      description,
      category,
      brand,
      stock,
      price,
      features,
    }) => {
      const tmpl = template({
        id,
        name,
        imageUrl,
        description,
        category,
        brand,
        stock,
        price,
        features,
      });
      container.appendChild(tmpl);
    }
  );
};
