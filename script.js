// 1. BASE DE DATOS DE PRODUCTOS
const productosHombres = [
  {
    id: 1001,
    nombre: "Tenis Runfalcon 2.0",
    precio: 194968,
    precioOriginal: 299950,
    descuento: 30,
    imagen: "./img/hombres/1.jpg",
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
      agotadas: ["US 9.5", "US 10", "US 10.5", "US 11"],
    },
  },
 
  {
    id: 1002,
    nombre: "Adidas Galaxy 6",
    precio: 219900,
    precioOriginal: 320000,
    descuento: 31,
    imagen: "./img/hombres/2.jpg",
    tallas: {
      disponibles: ["US 7", "US 7.5", "US 8", "US 8.5", "US 9", "US 10"],
      agotadas: [
        "US 5",
        "US 5.5",
        "US 6",
        "US 6.5",
        "US 9.5",
        "US 10.5",
        "US 11",
      ],
    },
  },
 
  {
    id: 1003,
    nombre: "Nike Revolution 6",
    precio: 249900,
    precioOriginal: 349900,
    descuento: 28,
    imagen: "./img/hombres/3.jpg",
    tallas: {
      disponibles: ["US 6", "US 6.5", "US 7", "US 8", "US 9"],
      agotadas: [
        "US 5",
        "US 5.5",
        "US 7.5",
        "US 8.5",
        "US 9.5",
        "US 10",
        "US 10.5",
        "US 11",
      ],
    },
  },
 
 
 
];
 
const productosMujeres = [
  {
    id: 2001,
    nombre: "Adidas Cloudfoam",
    precio: 189900,
    precioOriginal: 260000,
    descuento: 27,
    imagen: "./img/mujer/7.jpg",
    tallas: {
      disponibles: [
        "US 4",
        "US 4.5",
        "US 5",
        "US 5.5",
        "US 6",
        "US 6.5",
        "US 7",
        "US 7.5",
      ],
      agotadas: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5"],
    },
  },
 
  {
    id: 2002,
    nombre: "Nike Downshifter",
    precio: 210000,
    precioOriginal: 300000,
    descuento: 30,
    imagen: "./img/mujer/6.jpg",
    tallas: {
      disponibles: [
        "US 4.5",
        "US 5",
        "US 5.5",
        "US 6",
        "US 6.5",
        "US 7",
        "US 7.5",
      ],
      agotadas: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5"],
    },
  },
 
  {
    id: 2003,
    nombre: "Puma Flyer Runner",
    precio: 174900,
    precioOriginal: 240000,
    descuento: 2,
    imagen: "./img/mujer/8.jpg",
    tallas: {
      disponibles: ["US 4", "US 5", "US 5.5", "US 6", "US 6.5", "US 7"],
      agotadas: [
        "US 7.5",
        "US 8",
        "US 8.5",
        "US 9",
        "US 9.5",
        "US 10",
        "US 10.5",
      ],
    },
  },
];
 
const productosNinos = [
  {
    id: 3001,
    nombre: "Nike Star Runner",
    precio: 139900,
    precioOriginal: 180000,
    descuento: 22,
    imagen: "./img/nino/11.jpg",
    tallas: {
      disponibles: ["US 3.5", "US 4", "US 4.5", "US 5"],
      agotadas: ["US 5.5", "US 6", "US 6.5", "US 7"],
    },
  },
 
  {
    id: 3002,
    nombre: "Adidas Kids Tenis Gazelle",
    precio: 159900,
    precioOriginal: 210000,
    descuento: 24,
    imagen: "./img/nino/12.jpg",
    tallas: {
      disponibles: ["US 3.5", "US 4", "US 4.5", "US 5","US 5.5"],
      agotadas: ["US 6", "US 6.5", "US 7"],
    },
  },
 
  {
    id: 3003,
    nombre: "New Balance 480",
    precio: 149900,
    precioOriginal: 200000,
    descuento: 25,
    imagen: "./img/nino/13.jpg",
    tallas: {
      disponibles: ["US 3.5", "US 4", "US 4.5", "US 5"],
      agotadas: ["US 5.5", "US 6", "US 6.5", "US 7"],
    },
  },
 
   
];
 
 
const productosDescuentos = [
  {
    id: 4001,
    nombre: "Adidas Galaxy 6",
    precio: 149900,
    precioOriginal: 300000,
    descuento: 50,
    imagen: "./img/promos/tenis20.jpeg",
    tallas: {
      disponibles: ["US 4", "US 4.5", "US 5", "US 5.5", "US 6"],
      agotadas: ["US 6.5", "US 7", "US 7.5", "US 8", "US 8.5"]
    }
  },
 
  {
    id: 4002,
    nombre: "Nike Revolution 6",
    precio: 129900,
    precioOriginal: 260000,
    descuento: 50,
     imagen: "./img/promos/tenis18.jpg",
    tallas: {
      disponibles: ["US 4.5", "US 5", "US 5.5", "US 6"],
      agotadas: ["US 6.5", "US 7", "US 7.5", "US 8"]
    }
  },
 
  {
    id: 4003,
    nombre: "Puma ST Runner",
    precio: 159900,
    precioOriginal: 280000,
    descuento: 43,
     imagen: "./img/promos/tenis19.jpg",
    tallas: {
      disponibles: ["US 4", "US 5", "US 5.5", "US 6"],
      agotadas: ["US 6.5", "US 7", "US 7.5", "US 8"]
    }
  }
];
 
 
// 2. FUNCIÓN PARA RENDERIZAR PRODUCTOS
function renderProductos(containerId, productosArray, categoria) {
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
     <button
            class="btn btn-olimpia add-to-cart-btn px-4 d-block mx-auto"
            data-id="${producto.id}"
            data-category="${categoria}"
          >
            Agregar al carrito
          </button>
        </div>
 
      </div>
    `;
 
    container.appendChild(col);
  });
 
  activarTallasClick();
  activarBotonesCarrito();
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
 
function activarBotonesCarrito() {
  const botones = document.querySelectorAll(".add-to-cart-btn");
 
  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idProducto = parseInt(btn.dataset.id);
      const categoria = btn.dataset.category;
 
      agregarAlCarrito(idProducto, categoria);
    });
  });
}
 
//  CARRITO
let carrito = [];
 
function agregarAlCarrito(idProducto, categoria) {
console.log(categoria)
  let arrayOrigen;
 
  if (categoria === "hombre") arrayOrigen = productosHombres;
  if (categoria === "mujer") arrayOrigen = productosMujeres;
  if (categoria === "ninos") arrayOrigen = productosNinos;
  if (categoria === "descuentos") arrayOrigen = productosDescuentos;
  const prod = arrayOrigen.find((p) => p.id === idProducto);
 
  const talla = tallasSeleccionadas[idProducto];
 
  if (!talla) {
    Swal.fire({
      icon: "warning",
      title: "Selecciona una talla",
      text: "Debes elegir una talla antes de agregar al carrito",
      confirmButtonColor: "#000",
    });
    return;
  }
 
  carrito.push({
    ...prod,
    tallaSeleccionada: talla,
    categoria: categoria,
  });
 
  Swal.fire({
    icon: "success",
    title: "Agregado al carrito",
    text: `${prod.nombre} (${talla}) fue agregado correctamente.`,
    confirmButtonColor: "#000",
  });
}
 
// Ejecutar
renderProductos("storeMenContainer", productosHombres, "hombre");
renderProductos("storeGirlContainer", productosMujeres, "mujer");
renderProductos("storeKidContainer", productosNinos, "ninos");
renderProductos("storeDiscountContainer", productosDescuentos, "descuentos");



// Funcion actualizar carrito
function actualizarCarrito(){
  const productosCarrito = document.getElementById("productos_carrito");
  const conteoCarrito = document.getElementById("conteo_carrito");

  // Esto es para mantener el encabezado y la linea divisoria en el dropdown
  productosCarrito.innerHTML= `
  <li><h6 class="dropdown-header"> Carrito de Compras</h6>
  <li><hr class="dropdown-divider"></hr></li>
  `;
  
  // Verfica si la lista de carrito está vacía y la imprime en el dropdown
  if (carrito.length=== 0){
    productosCarrito.innerHTML += `<li id="carrito_vacio" class="dropdown-item text-center">No hay productos agregados</li>`;
    conteoCarrito.textContent = "0";
    return;
  }

  const resumenCarrito = {};
  carrito.forEach(prod =>{
    const clave = `${prod.id}-${prod.tallaSeleccionada}`;
    if (resumenCarrito[clave] === undefined) {
      resumenCarrito[clave] = { ...prod, cantidad: 1 };
    } else {
      resumenCarrito[clave].cantidad += 1;
    }
  });

  conteoCarrito.textContent = carrito.length;
  for (const clave in resumenCarrito) {
  const p = resumenCarrito[clave];
  productosCarrito.innerHTML += `
    <li class="dropdown-item d-flex align-items-center gap-2">
      <img src="${p.imagen}" alt="${p.nombre}" style="width:40px; height:40px;">
      <div>
        <div class="fw-bold">${p.nombre}</div>
        <div class="small text-muted">Talla: ${p.tallaSeleccionada}</div>
      </div>
      <span class="badge bg-primary ms-auto">${p.cantidad}</span>
      <button class="btn btn-danger btn-sm ms-2 borrar_producto_carrito" data-clave="${clave}">
        <i class= "bi bi-trash">
      </button>
    </li>
  `;
  }

  document.querySelectorAll('.borrar_producto_carrito').forEach(btn => {
    btn.addEventListener('click', function() {
      const clave = this.dataset.clave;
      const [id, talla] = clave.split('-');
      carrito = carrito.filter(function(producto) {
        if (producto.id === id && producto.tallaSeleccionada === talla) {
          return false; 
        }
        return true;
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
    });
  });
}

