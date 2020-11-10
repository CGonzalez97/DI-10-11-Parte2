class Libro{
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

    prestar(){
        if(this.cantidad > 0){
            this.cantidad--;
            this.prestados++;
            return true;
        }else{
            return false;
        }
    }

    devolver(){
        if(this.prestados > 0){
            this.prestados--;
            this.cantidad++;
            return true;
        }else{
            return false;
        }
    }

    mostrar(){
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}\nDisponibles: ${this.cantidad}\nPrestados: ${this.prestados}`);
    }
}

let libro1 = new Libro('Inserte titulo original aquí','Un kiwi superdotado',10,5);
let libro2 = new Libro('google.es/ideasTitulos','@n3rd',0,15);
let libro3 = new Libro('¿Qué libro?','Un amigo de un amigo',0,0);
let biblioteca:Libro[] = [libro1, libro2, libro3];

for(let i of biblioteca){
    i.mostrar();
    if(i.prestar()){
        console.log('Prestado con éxito');
    }else{
        console.log('No hay disponibles');
    }
    i.mostrar();
    if(i.devolver()){
        console.log('Gracia por devolverlo');
    }else{
        console.log('No tienes nada que devolver');
    }
    i.mostrar();
    console.log('\n\n\n\n\n');
}