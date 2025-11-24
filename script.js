// ============================
// 1. BASE DE DATOS DE PRODUCTOS
// ============================
const productosHombres = [
  {
    id: 1,
    nombre: "Tenis Runfalcon 2.0",
    precio: 194968,
    precioOriginal: 299950,
    descuento: 30,
    imagen: "/mnt/data/453dd94f-e35d-4425-9a11-52470a4971c7.png",
    tallas: {
      disponibles: [
        "US 5",
        "US 5.5",
        "US 6",
        "US 6.5",
        "US 7",
        "US 7.5",
        "US 8",
        "US 8.5",
        "US 9",
      ],
      agotadas: ["US 9.5", "US 10", "US 10.5"],
    },
  },
  {
    id: 1,
    nombre: "Tenis Runfalcon 2.0",
    precio: 194968,
    precioOriginal: 299950,
    descuento: 30,
    imagen: "/mnt/data/453dd94f-e35d-4425-9a11-52470a4971c7.png",
    tallas: {
      disponibles: [
        "US 5",
        "US 5.5",
        "US 6",
        "US 6.5",
        "US 7",
        "US 7.5",
        "US 8",
        "US 8.5",
        "US 9",
        "US 10",
        "US 10.5",
      ],
      agotadas: ["US 9.5"],
    },
  },
  ,
  {
    id: 1,
    nombre: "Tenis Runfalcon 2.0",
    precio: 194968,
    precioOriginal: 299950,
    descuento: 30,
    imagen: "/mnt/data/453dd94f-e35d-4425-9a11-52470a4971c7.png",
    tallas: {
      disponibles: [
        "US 5",
        "US 5.5",
        "US 6",
        "US 6.5",
        "US 7",
        "US 7.5",
        "US 8",
        "US 8.5",
        "US 9",
        "US 10",
        "US 10.5",
      ],
      agotadas: ["US 9.5"],
    },
  },
  ,
  {
    id: 1,
    nombre: "Tenis Runfalcon 2.0",
    precio: 194968,
    precioOriginal: 299950,
    descuento: 30,
    imagen: "/mnt/data/453dd94f-e35d-4425-9a11-52470a4971c7.png",
    tallas: {
      disponibles: [
        "US 5",
        "US 5.5",
        "US 6",
        "US 6.5",
        "US 7",
        "US 7.5",
        "US 8",
        "US 8.5",
        "US 9",
        "US 10",
        "US 10.5",
      ],
      agotadas: ["US 9.5"],
    },
  },
  ,
  {
    id: 1,
    nombre: "Tenis Runfalcon 2.0",
    precio: 194968,
    precioOriginal: 299950,
    descuento: 30,
    imagen: "/mnt/data/453dd94f-e35d-4425-9a11-52470a4971c7.png",
    tallas: {
      disponibles: [
        "US 5",
        "US 5.5",
        "US 6",
        "US 6.5",
        "US 7",
        "US 7.5",
        "US 8",
        "US 8.5",
        "US 9",
        "US 10",
        "US 10.5",
      ],
      agotadas: ["US 9.5"],
    },
  },
  ,
  {
    id: 1,
    nombre: "Tenis Runfalcon 2.0",
    precio: 194968,
    precioOriginal: 299950,
    descuento: 30,
    imagen: "/mnt/data/453dd94f-e35d-4425-9a11-52470a4971c7.png",
    tallas: {
      disponibles: [
        "US 5",
        "US 5.5",
        "US 6",
        "US 6.5",
        "US 7",
        "US 7.5",
        "US 8",
        "US 8.5",
        "US 9",
        "US 10",
        "US 10.5",
      ],
      agotadas: ["US 9.5"],
    },
  },
];

// ===================================
// 2. FUNCIÓN PARA RENDERIZAR PRODUCTOS
// ===================================
function renderProductos(containerId, productosArray) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`No existe el contenedor con ID: ${containerId}`);
    return;
  }

  container.innerHTML = "";

  productosArray.forEach((producto) => {
    const col = document.createElement("div");
    col.classList.add("col-md-4");

    col.innerHTML = `
      <div class="card product-card shadow-sm">

        <img src="${producto.imagen}" class="product-img" alt="${
      producto.nombre
    }" />

        <div class="card-body">
          <h5 class="text-danger fw-bold">$${producto.precio.toLocaleString()}</h5>

          <p class="old-price">
            $${producto.precioOriginal.toLocaleString()} 
            <span class="discount">-${producto.descuento}%</span>
          </p>

          <h5 class="card-title mb-1">${producto.nombre}</h5>

          <div class="d-flex flex-wrap gap-2 my-3 sizes-container">

            ${producto.tallas.disponibles
              .map(
                (t) => `
                <span 
                  class="px-3 py-2 bg-light border rounded size-option"
                  data-size="${t}"
                  data-id="${producto.id}"
                >${t}</span>
              `
              )
              .join("")}

            ${producto.tallas.agotadas
              .map(
                (t) => `
                <span 
                  class="px-3 py-2 bg-secondary text-white border rounded size-option disabled-size text-decoration-line-through opacity-75"
                  data-size="${t}"
                  data-id="${producto.id}"
                >${t}</span>
              `
              )
              .join("")}

          </div>

          <button class="btn btn-dark w-100" onclick="agregarAlCarrito(${
            producto.id
          })">
            Agregar al carrito
          </button>
        </div>

      </div>
    `;

    container.appendChild(col);
  });

  activarTallasClick();
}

// 3. SISTEMA DE SELECCIÓN DE TALLAS

const tallasSeleccionadas = {}; // { id_producto: "talla seleccionada" }

function activarTallasClick() {
  const tallas = document.querySelectorAll(".size-option:not(.disabled-size)");

  tallas.forEach((t) => {
    t.addEventListener("click", () => {
      const id = t.dataset.id;

      document
        .querySelectorAll(`.size-option[data-id="${id}"]`)
        .forEach((el) => {
          el.classList.remove("size-selected");
        });

      t.classList.add("size-selected");
      tallasSeleccionadas[id] = t.dataset.size;
    });
  });
}

// 4. CARRITO

let carrito = [];

function agregarAlCarrito(idProducto) {
  const prod = productos.find((p) => p.id === idProducto);
  const talla = tallasSeleccionadas[idProducto];

  if (!talla) {
    alert("Selecciona una talla antes de agregar al carrito");
    return;
  }

  carrito.push({
    ...prod,
    tallaSeleccionada: talla,
  });

  console.log("Carrito:", carrito);
  alert("Producto agregado al carrito");
}

// Ejecutar
renderProductos("storeMenContainer", productosHombres);
