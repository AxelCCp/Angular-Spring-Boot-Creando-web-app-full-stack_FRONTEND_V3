import { Injectable, EventEmitter } from '@angular/core';

//1.-_notificarUpload : AQUÍ SE TIENE EL ATRIBUTO Y SU METODO GETTER. EN EL ATRIBUTO SE PONE UN _ AL INICIO PARA Q NO DÉ CONFLICTO.

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  abrirModal(){
    this.modal = true;
  }

  cerrarModal(){
    this.modal = false;
  }

  get notificarUpload() : EventEmitter<any> {
    return this._notificarUpload;
  }

  modal : boolean = false;
  _notificarUpload = new EventEmitter<any>();
}
