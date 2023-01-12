import { Component, OnInit } from '@angular/core';
import { Factura } from './models/factura';
import { ClienteService } from '../clientes/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { FacturaService } from './services/factura.service';
import { Producto } from './models/producto';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ItemFactura } from './models/item-factura';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

//180 CODIGO COPIAD0 DESDE https://material.angular.io/components/autocomplete/overview
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
})
export class FacturasComponent implements OnInit {

  constructor(clienteService : ClienteService, activatedRoute : ActivatedRoute, facturaService : FacturaService, router : Router) {
    this.clienteService = clienteService;
    this.activatedRoute = activatedRoute;
    this.facturaService = facturaService;
    this.router = router;
  }


  ngOnInit(): void {
      //SE ASIGNA EL CLIENTE AL OBJ FACTURA QUE SE ESTÁ CREANDO
      this.activatedRoute.paramMap.subscribe(params => {
        // CON EL + SE PASA A TIPO NUMBER. // EL NOMBRE DEL PARAMETRO TIENE QUE LLAMARSE IGUAL AL PARAMETRO DEL APP MODULE "clienteId" , en : {path:'facturas/form/:clienteId', component:FacturasComponent}
        let clienteId = +params.get('clienteId');
        this.clienteService.getCliente(clienteId).subscribe(cliente => this.factura.cliente = cliente);
      });


      //180 CODIGO COPIAD0 DESDE https://material.angular.io/components/autocomplete/overview
      this.productosFiltrados = this.autocompleteControl.valueChanges.pipe(

        //ESTE MAP TOMA EL NOMBRE DE PRODUCTO Y LO PASA A UN string. //SI VALUE ES IDENTICO A STRING, RETORNA VALUE, SINO RETORNA PRODUCTO.NOMBRE.
        map(value => typeof value === 'string' ? value : value.nombre),

        //SE APLANA EL OBSERVABLE DE PRODUCTOS Q VIENE DESDE EL BACK Y SE PASA A OTRO OBSERVABLE.  //SI EL VALUE EXISTE RETORNA this._filter(value)... SINÓ RETORNA ARREGLO VACIO.
        flatMap(value => value ? this._filter(value) : []),
      );

  }


  //180 CODIGO COPIAD0 DESDE https://material.angular.io/components/autocomplete/overview
  private _filter(value: string): Observable<Producto[]> {
    const filterValue = value.toLowerCase();
    return this.facturaService.filtrarProductos(filterValue);
  }

  //producto? : PARÁMETRO OPCIONAL.
  mostrarNombre(producto? : Producto) : string | undefined {
    return producto ? producto.nombre : undefined;
  }


  seleccionarProduto(event : MatAutocompleteSelectedEvent) : void {
    //SE OBTIENE EL PRODUCTO A TRAVÉS DEL EVENT
    let producto = event.option.value as Producto;
    console.log(producto);

    if(this.existeItem(producto.id)){
      this.incrementaCantidad((producto.id));
    } else {
      //SE CREA UN ITEM CON E PRODUCTO SELECCIONADO
      let nuevoItem = new ItemFactura();
      nuevoItem.producto = producto;
      //SE AÑADE EL ITEM A LA FACTURA
      this.factura.items.push(nuevoItem);
    }

    //LUEGO SE LIMPIA EL AUTOCOMPLETE
    this.autocompleteControl.setValue('');
    //SE QUITA EL FOCUS DEL AUTOCOMPLETE EVENT
    event.option.focus();
    //SE DESSELECCIONA EL PRODUCTO SELECCIONADO PARA VOLVER A SELECCIONAR
    event.option.deselect();
  }


  //ACTUALIZA LA CANTIDAD DE UN TIPO DE PRODUCTO AL CREAR LA FACTURA
  actualizarCantidad(id : number, event : any) : void {
    //SE PASA LA CANTIDAD DEL EVENT DE UN ANY A NUMBER
    let cantidad : number = event.target.value as number;

    //SI CON LA FLECHA SE BAJA LA CANTIDAD DEL ITEM A 0, LA FILA SE ELIMINA--
    if(cantidad == 0){
      return this.eliminarItemFactura(id);        //EL RETURN SE PONE PARA SALIR.
    }
    //--

    //BUSCA EN EL ARREGLO DE ITEMS Q TIENE LA Factura
    this.factura.items = this.factura.items.map((item:ItemFactura) => {
      if(id === item.producto.id){
        item.cantidad = cantidad;
      }
      return item;
    });
  }


  //METODO PARA VERIFICAR SI HAY DOS LINEAS DE LA FACTURA CON EL MISMO PRODUTO, PARA NO REPETIR EL PRODUCTO Y ASÍ SUMARLOS A LA LINEA DE ITEM Q YA TIENE ESE PRODUCTO.
  existeItem(id : number) : boolean {
    let existe = false;
    this.factura.items.forEach((item : ItemFactura) => {
      if(id === item.producto.id ){
        existe = true;
      }
    });
    return existe;
  }

  //PARA INCREMETAR LA CANTIDAD EN LA LINEA DE LA FACTURA Q YA TIENE EL PRODUCTO Q SE ESTÁ REPITIENDO.
  incrementaCantidad(id : number) : void {
    this.factura.items = this.factura.items.map((item:ItemFactura) => {
      if(id === item.producto.id){
        ++item.cantidad;
      }
      return item;
    });
  }


  eliminarItemFactura(id : number) : void {
      this.factura.items = this.factura.items.filter((item : ItemFactura) => id !== item.producto.id);
  }


  //CREA LA FACTURA
  create() : void {
    console.log(this.factura);
    this.facturaService.create(this.factura).subscribe(factura => {
      swal.fire(this.titulo, `Factura : ${factura.descripcion} creada con éxito!`, 'success');
      this.router.navigate(['/clientes']);
    });
  }


  titulo : string = 'Nueva Factura';
  factura : Factura = new Factura();
  private clienteService : ClienteService;
  private activatedRoute : ActivatedRoute;
  private facturaService : FacturaService;
  private router : Router;

  //180 CODIGO COPIAD0 DESDE https://material.angular.io/components/autocomplete/overview
  autocompleteControl = new FormControl('');
  productosFiltrados: Observable<Producto[]>;
}
