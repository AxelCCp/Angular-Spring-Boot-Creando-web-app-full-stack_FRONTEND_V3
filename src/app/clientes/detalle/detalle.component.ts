import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';       //SE PONE .. PARA RETROCEDER EN UNA CARPETA Y ASÍ ACCEDER A LAS CLASES.
import { ClienteService } from '../cliente.service';
import swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';
import { Input } from '@angular/core';
import { ModalService } from './modal.service';
import { AuthService } from '../../usuarios/auth.service';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(clienteService : ClienteService, modalService : ModalService, authService : AuthService) {
    this.clienteService = clienteService;
    this.modalService = modalService;
    this.authService = authService;
  }

  ngOnInit(): void {}


  //CLASE 105 : CON BARRA DE CARGA DE IMAGEN
  seleccionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0; // SE REINICIA EL PROGRESO POR SI SE QUIERE CAMBIAR LA FOTO.
    console.log(this.fotoSeleccionada);
    //ESTO VALIDA Q EL ARCHIVO SUBIDO TENGA UN TYPE = IMAGE
    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      swal.fire('Error seleccionar imagen:', 'el archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada = null;
    }
  }

  subirFoto(){
    if(!this.fotoSeleccionada){
      swal.fire('Error upload:', 'debe seleccionar una foto', 'error');
    }else{
      this.clienteService.subirFoto(this.fotoSeleccionada, this.cliente.id)
      .subscribe(event => {
        //=== SIGNIFICA "IDÉNTICO A"
        if(event.type === HttpEventType.UploadProgress){
          this.progreso = Math.round((event.loaded/event.total)*100);
        }else if(event.type === HttpEventType.Response){
          let response : any = event.body;
          this.cliente = response.cliente as Cliente;
          //_notificarUpload : LOS PARENTESIS NO SE USAN EN UN GETTER. ESTA LÍNEA EMITE AL CLIENTE CON LA NUEVA FOTO, ESTO PARA ACTUALIZAR LA FOTO EN EL LISTADO DE CLIENTES.
          //EN EL CLIENTES COMPONENENT HAY Q SUSCRIBIRSE A ESTE EventEmitter. EN EL ONINIT()
          this.modalService._notificarUpload.emit(this.cliente);

                                                           //ESTE VIENE DEL BACK
          swal.fire('La imagen se Ha subido correctamente!', response.mensaje, 'success');
        }
      });
    }
  }

  cerrarModal(){
    this.modalService.cerrarModal();
    this.fotoSeleccionada = null;
    this.progreso = 0;
  }

  @Input() cliente : Cliente;                         //INPUT : INYECTA LA INSTANCIA DE CLIENTE EN DETALLES COMPONENT.
  private clienteService : ClienteService;
  titulo : string = "Detalle de Cliente";
  fotoSeleccionada : File;
  progreso : Number = 0;
  modalService : ModalService;
  authService : AuthService;
}
