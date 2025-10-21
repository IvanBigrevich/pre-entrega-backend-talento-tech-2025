export function validarComando(args) {
  if (args.length < 2) {
    throw new Error("Debe especificar un método y un recurso (ej: GET products)");
  }
}

export function formatearPrecio(precio) {
  return `$${parseFloat(precio).toFixed(2)}`;
}
