import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(http : HttpClient) {
    this.http = http;
  }


  getFactura(id : number) : Observable<Factura> {
    return this.http.get<Factura>(`${this.urlEndPoint}/${id}`);
  }



  private urlEndPoint : string = "http://localhost:8080/api/facturas";
  private http : HttpClient;
}
