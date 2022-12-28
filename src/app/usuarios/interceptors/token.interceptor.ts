import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';


//CLASE 159
//ESTO SE REGISTRA EN EL APP MODULE

//https://angular.io/guide/http#intercepting-requests-and-responses

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor(authService : AuthService){
    this.authService = authService;
  }

  intercept(req:HttpRequest<any>,next:HttpHandler) : Observable<HttpEvent<any>> {

    let token = this.authService.token;

    if(token != null){
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        headers : req.headers.set('Authorization', 'Bearer ' + token)
      });

        console.log('TokenInterceptor => Bearer ' + token);

        //ESTO LLEVA AL PROXIMO INTERCEPTOR, DENTRO DE TODOS LOS INTERCEPTORES Q PODAMOS TENER.
      return next.handle(authReq);  //SE PONE EL AUTH REQUEST MODIFICADO CON LAS NUEVAS CABECERAS.
    }
      //ESTO LLEVA AL PROXIMO INTERCEPTOR, DENTRO DE TODOS LOS INTERCEPTORES Q PODAMOS TENER.
    return next.handle(req);
  }



  private authService : AuthService;
}
