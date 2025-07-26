class Vehiculo {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.estado = "detenido";//Estado inicial del vehiculo
    }
  
    arrancar() {
       this.estado = "en movimiento";
    
      console.log(`Este vehículo marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año} está en marcha.`);
    }
    detener() {
        this.estado = "detenido";
        console.log(`Este vehículo marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año} se ha detenido.`);
      }
  }
  //Uso de clase
    const vehiculo1 = new Vehiculo("Toyota", "Corolla", 2020);
    const vehiculo2 = new Vehiculo("Honda", "Civic", 2019);
    vehiculo1.arrancar();
    vehiculo2.detener(); 
