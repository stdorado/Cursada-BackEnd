
class Product {
    constructor(nombre, precio, thumbnail, descripcion, code, stock) {
        this.id = null; // El id será asignado automáticamente al agregar el producto
        this.nombre = nombre;
        this.precio = precio;
        this.thumbnail = thumbnail;
        this.descripcion = descripcion;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.productos = []; // Aquí se almacenarán los productos agregados
        this.nextId = 1; // El próximo id disponible para asignar
    }

    agregarProducto(producto) {
        // Validar si el código ya existe
        const codigoExistente = this.productos.some(prod => prod.code === producto.code);
        if (codigoExistente) {
            console.log(`Error: El código "${producto.code}" ya está en uso.`);
            return;
        }
        
        // Asignar id autoincrementable al producto
        producto.id = this.nextId;
        this.nextId++;

        this.productos.push(producto); // Pushea el producto al array de productos
    }

    getProducts() {
        return this.productos; // retorna el array con todos los productos
    }

    getProductById(id) {
        const productoEncontrado = this.productos.find(prod => prod.id === id);
        if (productoEncontrado) {
            return productoEncontrado; // Reetorna el producto si se encuentra
        } else {
            return "El producto no existe."; // mensaje por si el producto no se encuentra
        }
    }
}

const Manager = new ProductManager();

// Creacion de lo productos
const Productos1 = new Product("iphone 10 pro", 100, "imagen iphone 12", "telefono de ultima generacion", "||||| |||| ||||", 50);
const Productos2 = new Product("iphone 8 pro", 400, "imagen iphone 8", "telefono de ultima generacion", "||||| |||||| ||||", 20);
const Productos3 = new Product("iphone 14 pro", 400, "imagen iphone 14", "telefono de ultima generacion", "||||| |||||||| ||||", 40);

Manager.agregarProducto(Productos1);
Manager.agregarProducto(Productos2);
Manager.agregarProducto(Productos3);

// Muestrra de productos y filtra
console.log(Manager.getProducts());
console.log(Manager.getProductById(1)); 
console.log(Manager.getProductById(4)); 