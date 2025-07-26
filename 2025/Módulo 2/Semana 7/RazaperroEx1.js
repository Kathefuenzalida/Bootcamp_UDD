class Animal {
    constructor(name, edad) {
        this.name = name;
        this.edad = edad;
    }

    describir() {
        console.log(`Soy un animal llamado ${this.name} y tengo ${this.edad} años.`);
    }
}
class Perro extends Animal {
    constructor(name, edad, raza) {
        super(name, edad);
        this.raza = raza;
    }

    ladrar() {
        console.log(`${this.nombre} dice ¡Guau! ¡Guau!`);
    }

    describir() {
        super.describir();
        console.log(`Soy un perro de raza ${this.raza}.`);
    }
}
//Material de prueba
const miPerro = new Perro("Rex", 5, "Labrador");
miPerro.describir(); // "Soy un animal llamado Rex y tengo 5 años. Soy un perro de raza Labrador."
miPerro.ladrar(); // "Rex dice ¡Guau! ¡Guau!"
