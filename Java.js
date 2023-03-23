const productos = [
    /** Guitarras */
    {
        id: "Guitarras- 01",
        titulo: "Guitarra Epiphone Les Paul Negra",
        imagen: "./img/negra.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio:"13,699.00"
    },
    {
        id: "Guitarras- 02",
        titulo: "Guitarra Epiphone Les Paul Roja",
        imagen: "./img/roja.png",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: "13,699.00"
    },
    {
        id: "Guitarras- 03",
        titulo: "Guitarra Epiphone Les Paul Blanca",
        imagen: "./img/blanca.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: "13,699.00"
    },
    {
        id: "Guitarras- 04",
        titulo: "Guitarra Epiphone Les Paul Dorada",
        imagen: "./img/dorada.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: "15,999.00"
    },
    {
        id: "Guitarras- 05",
        titulo: "Guitarra Epiphone Les Paul Purpura",
        imagen: "./img/purpura.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: "13,690.00"
    },
    {
        id: "Guitarras- 06",
        titulo: "Guitarra Epiphone Les Paul Verde",
        imagen: "./img/verde.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: "13,690.00"
    },
    {
        id: "Guitarras- 07",
        titulo: "Guitarra Electro Acustica Taylor 414 CE",
        imagen: "./img/taylor.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio:"54,000.00"
    },
    {
        id: "Guitarras- 08",
        titulo: "Guitarra Acustica Yamaha C40",
        imagen: "./img/Yamaha.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: "3,490.00"
    },
    /** Bajos */
    {
        id: "Bajos- 01",
        titulo: "Bajo Electrico Hofner Sunburst  HI-BB-SB ",
        imagen: "./img/hofner.jpg",
        categoria: {
            nombre: "Bajos",
            id: "bajos"
        },
        precio: "9,399.00"
    },
    {
        id: "Bajos- 02",
        titulo: "Bajo Yamaha 4 Cuerdas TRBX174DMB Azul ",
        imagen: "./img/b yamaha.jpg",
        categoria: {
            nombre: "Bajos",
            id: "bajos"
        },
        precio: "6,009.00"
    },
    {
        id: "Bajos- 03",
        titulo: "Bajo Electrico Yamaha TRBX305 Rojo ",
        imagen: "./img/b rojo.jpg",
        categoria: {
            nombre: "Bajos",
            id: "bajos"
        },
        precio: "9,990.00"
    },
    {
        id: "Bajos- 04",
        titulo: "Bajo Electrico Yamaha TRBX174OVS ",
        imagen: "./img/b negro.jpg",
        categoria: {
            nombre: "Bajos",
            id: "bajos"
        },
        precio: "6,003.00"
    },
    {
        id: "Bajos- 05",
        titulo: "Bajo Electrico Yamaha Profesional ",
        imagen: "./img/b rojon.jpg",
        categoria: {
            nombre: "Bajos",
            id: "bajos"
        },
        precio: "20,691.00"
    },
    {
        id: "Bajos- 06",
        titulo: "Bajo JS SERIES SPECTRA BASS JS3 ",
        imagen: "./img/spectra.jpg",
        categoria: {
            nombre: "Bajos",
            id: "bajos"
        },
        precio: "6,890.00"
    },
    /** Teclados */
    {
        id: "Teclados- 01",
        titulo: "Teclado Yamaha PSRE473 ",
        imagen: "./img/t yamaha.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: "12,990.00"
    },
    {
        id: "Teclados- 02",
        titulo: "Teclado Symphonic Mp-7 ",
        imagen: "./img/t symphonic.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: "2,690.00"
    },
    {
        id: "Teclados- 03",
        titulo: "Teclado Profesional Yamaha  ",
        imagen: "./img/p yamaha.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: "96,999.00"
    },
    {
        id: "Teclados- 04",
        titulo: "Teclado ED Kurzweil KP-100 ",
        imagen: "./img/kp100.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: "5,400.00"
    },
    {
        id: "Teclados- 05",
        titulo: "Teclado Roland Go keys de 61 teclas ",
        imagen: "./img/roland.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: "8,119.00"
    },
    {
        id: "Teclados- 06",
        titulo: "Teclado Symphonic Mp-5 54 Teclas Color Negro ",
        imagen: "./img/t negro.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: "1,790.00"
    },


];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML="";
        productosElegidos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
            <div class="productos">
            <img class="producto-imagen" src="${producto.imagen}" alt="">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
            `

            contenedorProductos.append(div);
        })
        actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id !="todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
    } else{
        tituloPrincipal.innerText = "Todos los productos";
        cargarProductos(productos)
    }

    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS){
 productosEnCarrito = JSON.parse(productosEnCarritoLS);
 actualizarNumerito();
} else{
    productosEnCarrito=[];
}
function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
    productosEnCarrito[index].cantidad++;

    } else{
        productoAgregado.cantidad= 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0);
    numerito.innerText= nuevoNumerito;

}





