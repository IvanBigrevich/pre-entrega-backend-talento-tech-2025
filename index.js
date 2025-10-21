import {
  obtenerProductos,
  obtenerProducto,
  agregarProducto,
  eliminarProducto,
} from "./fakestoreAPI.js";

const argumentos = process.argv.slice(2);

(async () => {
  try {
    const [metodo, recurso, ...resto] = argumentos;

    if (metodo === "GET" && recurso === "products") {
      await obtenerProductos();

    } else if (metodo === "GET" && recurso.startsWith("products/")) {
      const productId = recurso.split("/")[1];
      await obtenerProducto(productId);

    } else if (metodo === "POST" && recurso === "products" && resto.length === 3) {
      const [title, price, category] = resto;
      const producto = { title, price, category };
      await agregarProducto(producto);

    } else if (metodo === "DELETE" && recurso.startsWith("products/")) {
      const productId = recurso.split("/")[1];
      await eliminarProducto(productId);

    } else {
      console.log(
        "Comando inválido. Ejemplos válidos:\n" +
          "npm run start GET products\n" +
          "npm run start GET products/15\n" +
          "npm run start POST products T-Shirt 300 remeras\n" +
          "npm run start DELETE products/7"
      );
    }
  } catch (error) {
    console.error("Error al procesar el comando:", error.message);
  }
})();
