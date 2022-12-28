import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


//CLASE 160
//ESTO SE REGISTRA EN EL APP MODULE
//https://angular.io/guide/http#intercepting-requests-and-responses
/** Pass untouched request through to the next request handler. */

//VALIDA LOS ERRORES 401 Y 403


@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(authService : AuthService, router : Router){
    this.authService = authService;
    this.router = router;
  }

  intercept(req:HttpRequest<any>,next:HttpHandler) : Observable<HttpEvent<any>> {


    //ESTO LLEVA AL PROXIMO INTERCEPTOR, DENTRO DE TODOS LOS INTERCEPTORES Q PODAMOS TENER.

    return next.handle(req).pipe(

      catchError(e => {
        //401 : NO AUTORIZADO //403 : RECURSO PROHIBIDO
        if(e.status==401){

          //155---MANEJAR LA EXPIRACION DEL TOKEN
            if(this.authService.isAuthenticated()){
              this.authService.logout();
            }
          //------155

          this.router.navigate(['/login']);
        }

        if(e.status==403){
          swal.fire('Acceso Denegado', `Hola ${this.authService.usuario.username} no tienes acceso a este recurso`, 'warning');
          this.router.navigate(['/clientes']);
        }

        return throwError(e);
      })
    );
  }


  private authService : AuthService;
  private router : Router;
}
