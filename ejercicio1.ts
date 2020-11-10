class Persona {
    nombre:string;
    apellidos:string;
    fechaNacimiento:Date;

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

let fechaN:Date = new Date(1997,5,1);

let persona1 = new Persona('Carlos','González Lozano', fechaN);

persona1.saludar();
console.log(persona1.calcularEdad());