import { Carrito } from './carrito';


fdescribe('Prueba Unitaria PU-01: Lógica del Carrito', () => {

  it('Debe calcular correctamente el subtotal multiplicando precio por cantidad', () => {
    // 1. Preparar los datos
    const precio = 408;
    const cantidad = 2;

    // 2. Ejecutar la función matemática aislada 
    const resultado = Carrito.prototype.calcularSubtotalItem(precio, cantidad); 

    // 3. Comprobar el resultado
    expect(resultado).toBe(816);
  });

});