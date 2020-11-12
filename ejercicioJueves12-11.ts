class Libro4{
    titulo:string;
    autor:string;
    cantidad:number;
    prestados:number;

    constructor(titulo:string, autor:string, cantidad:number, prestados:number){
        this.titulo = titulo;
        this.autor = autor;
        this.cantidad = cantidad;
        this.prestados = prestados;
    }
    mostrar(){
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}\nDisponibles: ${this.cantidad}\nPrestados: ${this.prestados}`);
    }
}

function ordenarListaPorTitulo(lista){
    return lista.sort((a,b)=>{
        if(a.titulo.toUpperCase() > b.titulo.toUpperCase()){
            return 1;
        }else if(a.titulo.toUpperCase() < b.titulo.toUpperCase()){
            return -1;
        }else{
            return 0;
        }
    });
}
function insertarLibro(lista, libro){
    lista.push(libro);
    ordenarListaPorTitulo(lista);
}
function eliminar(lista, indice){
    lista.splice(indice,1);
}
function extraer(lista, indice){
    return lista.slice(indice,(indice+1));
}
function buscar(lista, fragmento){
    let encontrado = false;
    for(let i =0; i < lista.length && !encontrado; i++){
        if(lista[i].titulo.indexOf(fragmento) >= 0){
            return i;
        }
    }
    if(encontrado == false){
        return -1;
    }
}

let libro14 = new Libro4('Inserte titulo original aquí','Un kiwi superdotado',10,5);
let libro24 = new Libro4('google.es/ideasTitulos','@n3rd',0,15);
let libro34 = new Libro4('¿Qué libro?','Un amigo de un amigo',0,0);
let biblioteca4:Libro4[] = [libro14, libro24, libro34];

//ordenar
console.log(biblioteca4);
ordenarListaPorTitulo(biblioteca4);
console.log(biblioteca4);

console.log('Tamaño lista: '+biblioteca4.length);

//insertar
insertarLibro(biblioteca4, new Libro4('Libro insertado','yo',5,0));
console.log(biblioteca4);

//Eliminar
console.log('Eliminar');
eliminar(biblioteca4, 0);
console.log(biblioteca4);

//Extraer
console.log('extraer');
console.log(extraer(biblioteca4,1));

//Buscar
console.log('Buscar.');
let resultado = buscar(biblioteca4, 'insert');
if(resultado >= 0){
    console.log(biblioteca4[resultado]);
}else{
    console.log('No hay coincidencias.');
}