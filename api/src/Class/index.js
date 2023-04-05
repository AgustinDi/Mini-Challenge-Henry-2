class Alumno{
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

module.exports = Alumno;