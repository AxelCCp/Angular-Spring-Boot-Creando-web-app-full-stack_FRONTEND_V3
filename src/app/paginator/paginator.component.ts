import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';    //PARA Q SE VAYAN ACTUALIZANDO LOS RANGOS DEL PAGINADOR
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this. initPaginator();
  }

  ngOnChanges(changes : SimpleChanges){
    let paginadorActualizado = changes['paginador'];
    
    if(paginadorActualizado.previousValue){
      this.initPaginator();
    }
  }

  private initPaginator() : void {
    //MAXIMO ENTRE 1 Y LA PAGINA ACTUAL MENOS 4 ,,, Y EL TOTAL DE PÁGINAS MENOS 5
    this.desde = Math.min(Math.max(1,this.paginador.number-4), this.paginador.totalPages-5);
    this.hasta = Math.max(Math.min(this.paginador.totalPages, this.paginador.number+4),6);
    if(this.paginador.totalPages > 5){
      this.paginas = new Array(  this.hasta - this.desde + 1).fill(0).map((valor, indice) => indice + this.desde);
    }else{
      this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor, indice) => indice + 1);
    }
  }

  @Input()
  paginador : any;
  paginas : number[];
  //RANGOS DEL PAGINADOR.
  desde : number;
  hasta : number;
}
