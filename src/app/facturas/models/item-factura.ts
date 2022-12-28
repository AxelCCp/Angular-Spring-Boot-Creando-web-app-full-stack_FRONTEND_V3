import { Producto } from './producto';

export class ItemFactura {

  producto : Producto;
  cantidad : number = 1;
  importe : number;

  //EL IMPORTE TMBN SE PODRÍA CALCULAR EN EL FRONT ... Y SE USARÍA ESTE MÉTODO. PER EL IMPORTE YA VIENE DEL BACK.
  public calcularImporte() : number {
    return this.cantidad * this.producto.precio;
  }


}
