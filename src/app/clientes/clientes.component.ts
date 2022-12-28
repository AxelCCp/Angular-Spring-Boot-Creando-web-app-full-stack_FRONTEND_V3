import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';         //PARA ACTIVAR EL PATH VARIABLE DE LA PAGINACIÓN
import { ModalService } from './detalle/modal.service';
import { AuthService } from '../usuarios/auth.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  constructor(clienteService:ClienteService, activatedRoute : ActivatedRoute, modalService : ModalService, authService : AuthService) {
    this.clienteService = clienteService;
    this.activatedRoute = activatedRoute;
    this.modalService = modalService;
    this.authService = authService;
  }

//CON LIST
/*
  ngOnInit(): void {
      //this.clientes = this.clienteService.getClientes();
      this.clienteService.getClientes()

      .pipe(tap(clientes => {
        console.log('ClientesComponent : tap 3');
        clientes.forEach(cliente => {
          console.log(cliente.nombre);
      });
    })
    )

    .subscribe((clientes) => {
          this.clientes = clientes;     //ESTA LÍNEA DE CÓDIGO TAMBN SE PUEDE AGREGAR AL TAP().
        }
      );
  }*/

  //CON PAGE
  //activatedRoute.paramMap : SE ENCARGA DE SUSCRIBIR UN OBSERVADOR CADA VEZ QUE CAMBIA EL PARÁMETRO PAGE EN LA RUTA. RECARGANDO EL LISTADO DE CLIENTES SEGUN EL n° PAGINA
  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(params => {
        //EL + COMBIERTE ESTE STRING "params.get('page')" EN UN ENTERO.
        let page : number = +params.get('page');
        //SI PAGE NO ESTÁ DEFINIDO
        if(!page){
          page = 0;
        }
        this.clienteService.getClientes(page)
        .pipe(
          tap(response => {
            console.log('ClientesComponent : tap 3');
            (response.content as Cliente[]).forEach(cliente => console.log(cliente.nombre));
          })
        ).subscribe(response => {
          this.clientes = response.content as Cliente[];
          this.paginador = response;
        });
    });

    //SE RELACIONA CON   this.modalService._notificarUpload.emit(this.cliente); DE DetalleComponent.ts. EN EL MET subirFoto().
    //SE RECORRE LA LISTA DE CLIENTES Y SE COMPARA CON EL CLIENTE QUE SE EMITIÓ EN DetalleComponent AL ACTUALIZAR LA FOTO. Y SI LOS ID COINCIDEN, SE ACTUALIZA LA FOTO DEL CLIENTE EN LA LISTA.
    this.modalService.notificarUpload.subscribe(cliente => {
      this.clientes = this.clientes.map(clienteOriginal => {
        if(cliente.id == clienteOriginal.id){
          clienteOriginal.foto = cliente.foto;
        }
        return clienteOriginal;
      })
    });

  }

  public delete(cliente : Cliente) : void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(response => {
          //PARA ACTUALIZAR AUTOMÁTICAMENTE LA LISTA CON EL CLIENTE Q SE ELIMINÓ. SE USA FILTRO.
          this.clientes = this.clientes.filter(cli => cli !== cliente);
          swalWithBootstrapButtons.fire(
            'Cliente eliminado!',
            `Cliente ${cliente.nombre} ${cliente.apellido} eliminado con éxito!`,
            'success'
          )
        })
      }
    })
  }

  abrirModal(cliente : Cliente){
    this.clienteSeleccionado = cliente;
    this.modalService.abrirModal();
  }


  clientes : Cliente[];
  private clienteService : ClienteService;
  private activatedRoute : ActivatedRoute;
  paginador : any;
  clienteSeleccionado : Cliente;
  private modalService : ModalService;
  authService : AuthService;

}
