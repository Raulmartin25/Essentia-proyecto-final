const KEY = "cart:v1";

export const saveCart = (items) => {
  try {
    localStorage.setItem("cart:v1", JSON.stringify(items));
  } catch (error) {
    console.error("Error al guardar el carrito:", error);
  }
};

export const loadCart = () => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Error al cargar el carrito:", error);
    return [];
  }
};
