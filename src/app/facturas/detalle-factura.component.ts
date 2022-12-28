import { Component, OnInit } from '@angular/core';
import { FacturaService } from './services/factura.service';
import { Factura } from './models/factura';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html'
})
export class DetalleFacturaComponent implements OnInit {

  constructor(facturaService : FacturaService, activatedRoute : ActivatedRoute) {
    this.facturaService = facturaService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.facturaService.getFactura(id).subscribe(factura => {
        this.factura = factura;
      })
    })

  }


private facturaService : FacturaService;
factura : Factura;
titulo : string = 'Factura';
private activatedRoute : ActivatedRoute;
}
