# Pre-Entrega - API FakeStore con Node.js

Proyecto de práctica que implementa una API CLI (Command Line Interface) para interactuar con la API pública de [FakeStoreAPI](https://fakestoreapi.com/).

Permite **listar, obtener, agregar y eliminar productos** directamente desde la terminal usando Node.js.

---

## Configuración Inicial

1. Clonar este repositorio:
   ```bash
   git clone <URL_DEL_REPO>
   cd pre_entrega


2. Comandos disponibles:
   ```bash

   *Obtiene y muestra en consola la lista completa de productos disponibles en FakeStore.*
   npm run start GET products

   *Obtiene y muestra la información completa de un producto según su ID.*
   npm run start GET products/15

   *Envía una petición POST a la API para agregar un nuevo producto con los datos especificados.*
   npm run start POST products "T-Shirt-Rex" 300 "remeras"

   *Elimina de la API el producto correspondiente al ID especificado.*
   npm run start DELETE products/7

   *Actualizar un producto existente*
   npm run start PUT products/5 "NuevoProducto" 250 "nuevaCategoria"