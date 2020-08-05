var carrito = document.querySelector('.carrito');

class Productos {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

class ProductosSefleccionados {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

var cartBuble = document.querySelector('.pop-snippet');
var div_producto_addCarrito;

var productos = [new Productos('camisa tipo polo', 60000), new Productos('camisa ocean Sense', 74000), new Productos('camisa Dammit', 58000), new Productos('camisa Golf Star', 60000), new Productos('camisa ocean pacific', 74000), new Productos('camisa Paul Redd fresh air collection', 658000), new Productos('camisa fitness ', 60000), new Productos('camisa estampada sense logic', 74000), new Productos('camisa motivo pretrol head', 658000), new Productos('camisa lander', 60000), new Productos('camisa pacific feeling', 74000), new Productos('camisa dart sense', 658000), new Productos('camisa American feeling', 93000), new Productos('camisa Mint', 60000), new Productos('camisa Blue shades', 74000), new Productos('camisa Cruiser', 658000), new Productos('camisa Lord feeling', 93000), new Productos('camisa roja', 10000)];
function setProducts() {
    var gallery = document.getElementById('gallery'); // Get the gallery

    for (let index = 0; index < productos.length; index++) {
        var div_producto = document.createElement('div'); // Create a div for .producto class
        var div_producto_imagen = document.createElement('div')
        var div_producto_nombre = document.createElement('div'); // Create a div for .nombre class
        var div_producto_valor = document.createElement('div'); // Create a div for .valor class
        div_producto_addCarrito = document.createElement('div'); // Create a div for add-carrito class

        div_producto.className = 'producto'; // Binding the divs with it's correspondant classes
        div_producto_imagen.className = 'imagen'; //   ..            ..        ..          .. 
        div_producto_nombre.className = 'nombre'; //   ..            ..        ..          .. 
        div_producto_valor.className = 'valor'; //   ..            ..        ..          .. 
        div_producto_addCarrito.className = 'add-carrito'; //   ..            ..        ..          .. 

        div_producto_nombre.innerHTML = productos[index].nombre;
        div_producto_valor.innerHTML = productos[index].valor;
        div_producto_addCarrito.innerHTML = 'añadir al carrito'
        // div_producto.querySelector('.nombre').innerHTML = 'asdfasfdsada:___';
        div_producto.appendChild(div_producto_imagen)
        div_producto.appendChild(div_producto_nombre)
        div_producto.appendChild(div_producto_valor)
        div_producto.appendChild(div_producto_addCarrito)
        // div_producto.querySelector('.valor').innerHTML = 'testval placeholder'
        gallery.appendChild(div_producto);
    }



}
setProducts()

// Función para añadir adapter al boton 'añadir al carrito'
var listaProductosCarrito;

var prods = document.querySelectorAll('.producto');
function addCartAdapter(productsList) {
    // productsList.forEach(product => console.log(product.querySelector('.valor').innerHTML))
    // addCarrito.map(product => product.addEventListener('click', () => alert('some')))
    productsList.forEach(product => product.lastElementChild.addEventListener('click', () => {
        alert(`${product.querySelector('.valor').innerHTML} ${product.querySelector('.nombre').innerHTML}`)
        listaProductosCarrito.push(new ProductosSefleccionados(product.querySelector('.nombre').innerHTML, product.querySelector('.valor').innerHTML));
        var stringProducts = JSON.stringify(listaProductosCarrito)
        localStorage.setItem('productos', stringProducts);
        cartInfo()
    }))
}
addCartAdapter(prods)

function cartInfo() {
    var arrayProducts = JSON.parse(localStorage.getItem('productos'))
    if (arrayProducts.length > 0) {
        cartBuble.style.display = 'block'
        cartBuble.innerHTML = arrayProducts.length;
        listaProductosCarrito = arrayProducts;
    } else {
        listaProductosCarrito = []
    }
    // console.log(arrayProducts);
}
cartInfo()

// Guardar lista de productos en el localStorage  =======PENDING
// var stringProducts = JSON.stringify(listaProductosCarrito)
// localStorage.setItem('productos', stringProducts);

// mostrar y enviar al carrito

while (listaProductosCarrito > 0) {
    console.log(listaProductosCarrito.length);
}