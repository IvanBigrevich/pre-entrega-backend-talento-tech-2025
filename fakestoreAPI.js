const BASE_URL = "https://fakestoreapi.com/products";

export async function obtenerProductos() {
  try {
    const response = await fetch(BASE_URL, { method: "GET" });

    if (!response.ok) throw new Error(`Error ${response.status}`);

    const data = await response.json();
    console.log("Lista de productos:");
    console.table(
      data.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        category: p.category,
      }))
    );
  } catch (error) {
    console.error("Error al obtener productos:", error.message);
  }
}

export async function obtenerProducto(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, { method: "GET" });

    if (!response.ok) throw new Error(`Producto ${id} no encontrado`);

    const data = await response.json();
    console.log("Detalle del producto:");
    console.log(data);
  } catch (error) {
    console.error("Error al obtener el producto:", error.message);
  }
}

export async function agregarProducto(producto) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });

    if (!response.ok) throw new Error(`Error ${response.status}`);

    const data = await response.json();
    console.log("Producto agregado exitosamente:");
    console.log(data);
  } catch (error) {
    console.error("Error al agregar producto:", error.message);
  }
}

export async function eliminarProducto(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error(`Error ${response.status}`);

    const data = await response.json();
    console.log(`Producto con ID ${id} eliminado exitosamente:`);
    console.log(data);
  } catch (error) {
    console.error("Error al eliminar producto:", error.message);
  }
}