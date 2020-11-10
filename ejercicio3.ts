class Persona3 {
    nombre:string;
    apellidos:string;
    fechaNacimiento:Date;
    libros:Libro3[];

    constructor(nombre:string, apellidos:string, fechaNac:Date){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNac;
    }

    saludar(){
        //return 'Hola, me llamo '+this.nombre;
        console.log('Hola, me llamo '+this.nombre);
    }

    calcularEdad(){
        let hoy:Date = new Date;
        let edad:number;
        //edad = this.fechaNacimiento.getFullYear() - hoy.getFullYear();
        if(this.fechaNacimiento.getMonth() > hoy.getMonth()){
            edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear() -1;
        }else if(this.fechaNacimiento.getMonth() < hoy.getMonth()){
            edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        }else{
            if(this.fechaNacimiento.getDay() > hoy.getDay()){
                edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear() -1;
            }else{
                edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
            }
        }
        return edad;
    }
}

class Libro3{
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
    prestar(persona:Persona3){
        if(this.cantidad > 0){
            this.cantidad--;
            this.prestados++;
            persona.libros.push(this);
            return true;
        }else{
            return false;
        }
    }
    devolver(persona:Persona3){
        if(this.prestados > 0){
            this.prestados--;
            this.cantidad++;
            for(let cadaLibro of persona.libros){
                if(cadaLibro == this){
                    cadaLibro=null;
                }
            }
            return true;
        }else{
            return false;
        }
    }
    mostrar(){
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}\nDisponibles: ${this.cantidad}\nPrestados: ${this.prestados}`);
    }
}


let persona3 = new Persona3('Carlos','González Lozano', new Date(1997,5,1));

let libro13 = new Libro3('Inserte titulo original aquí','Un kiwi superdotado',10,5);
let libro23 = new Libro3('google.es/ideasTitulos','@n3rd',0,15);
let libro33 = new Libro3('¿Qué libro?','Un amigo de un amigo',0,0);
let biblioteca3:Libro3[] = [libro13, libro23, libro33];

console.log(persona3.libros);
libro13.prestar(persona3);
console.log(persona3.libros);
libro13.devolver(persona3);
console.log(persona3.libros);