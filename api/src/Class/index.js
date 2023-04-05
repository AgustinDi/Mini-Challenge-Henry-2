export class Alumno{
	constructor(nombre,edad){
    	this.nombre=nombre;
      	this.edad=edad;
    }
  	getNombre(){
    	return this.nombre;
    }
    getEdad(){
        return this.edad;
    }
    isAdult(){
        return this.edad > 17;
    }
}

let classmate = new Alumno("Mike Will",15);