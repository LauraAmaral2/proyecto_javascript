const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
       
    }
   
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    console.log(elemento);



    this.insertarCarrito(infoElemento);
 

}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
   <td>
      <img scr="${elemento.imagen}" widht=100>
   </td>
   <td>
       ${elemento.titulo}
    </td>
    <td>
       ${elemento.precio}
    </td>
    <td>
      <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    </td>     
       `;

    lista.appendChild(row);

}


function eliminarElemento(e) {
    e.preventDefault();
    let elemento;
    if (e.target.classList.contains('borrar')) {

        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
    }
}



function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
const saveLocal = () => {
    localStorage.setItem('productos', JSON.stringify(elemento))
    
       }
