import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';   //SE USA PARA OBTENER EL ID DEL CLIENTE , PARA EL MÉTODO FIND BY ID, en cargarCliente().
import { Region } from './region';

//REGISTRA LA RUTA EN EL APP.MODULE.TS

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  constructor(private clienteService : ClienteService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    //PARA QUE CARGUE LOS DATOS DEL CLIENTE EN EL FORMULARIO AL APRETAR BOTON EDITAR.
    this.cargarCliente();
    this.clienteService.getRegiones().subscribe(regiones => this.regiones = regiones);
  }


  public create() : void {
    console.log(this.cliente);
    //console.log('clicked!');
    this.clienteService.create(this.cliente).subscribe(
      (cliente) => {
        this.router.navigate(['/clientes'])                    //CON ESTO REDIRIGE AL LISTADO DE CLIENTES PARA MOSTRAR LOS CAMBIOS.
        swal.fire('Nuevo Cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success');
      },
      err => {
        this.errores = err.error.errors as string[];    //error : es un atributo json de err y errors es el q viene desde spring.
        console.error('Código del error desde el back : ' + err.status);
        console.error(err.error.errors);
      }
    );
  }


  public cargarCliente() : void {
    this.activatedRoute.params.subscribe(params => {                    //EL 1ER SUBSCRIBE SE MANTIENE OBSERVANDO CUANDO LLEGUE UN ID.
      let id = params['id'];
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    });
  }


  public update() : void{
    console.log(this.cliente);
    this.cliente.facturas = null; //192 ... ESTO ES PARA EVITAR ACTUALIZAR LAS FACTURAS DEL CLIENTE, CUANDO SE ACTUALIZAN LOS DATOS DEL CLIENTE.
    this.clienteService.update(this.cliente).subscribe(
      (json) => {
        this.router.navigate(['/clientes']);
        swal.fire('Cliente actualizado', `Cliente ${json.cliente.nombre} actualizado con éxito!`, 'success');
    },
    err => {
      this.errores = err.error.errors as string[];    //error : es un atributo json de err y errors es el q viene desde spring.
      console.error('Código del error desde el back : ' + err.status);
      console.error(err.error.errors);
    }
  );
  }

  //clase 118
  compararRegion(obj1:Region, obj2:Region) : boolean {
    if(obj1 === undefined && obj2 === undefined){
      return true;                                          //SI NO ESTÁ DEFINIDA LA REGIÓN, EN EL CREAR CLIENTE, MARCA "--- Seleccionar una región ---"
    }

    return obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined ? false : obj1.id === obj2.id;   //SI AL COMPARAR, SON IGUALES, DEVUELVE TRUE, Y LO MUESTRA EN EL FORMULARIO.
  }

  cliente : Cliente = new Cliente();    //EL OBJ CLIENTE SE CARGA CON LOS DATOS DEL FORMULARIO. FUNCIONA EN AMBAS DIRECCIONES. O SEA TAMBN PARA CARGAR LOS DATOS DEL FORMULARIO DESDE EL BACK.
  titulo : string = 'Crear cliente';
  errores : string[];
  regiones : Region[];

}
