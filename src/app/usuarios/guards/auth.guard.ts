import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


//CLASE 156 ..... DESPUÉS ESTO SE APLICA EN LAS RUTAS DEL APP MODULE.
//ESTE GUARD ES PARA VALIDAR LA AUTHENTICACION.

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(authService : AuthService, router : Router){
    this.authService = authService;
    this.router = router;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.authService.isAuthenticated()){

        if(this.isTokenExpirado()){
          this.authService.logout();
          this.router.navigate(['/login'])
          return false;
        }

        return true;
      }
      
      this.router.navigate(['/login'])
      return false;
  }


  isTokenExpirado() : boolean {
    let token = this.authService.token;
    let payload = this.authService.obtenerDatostoken(token);
    let now = new Date().getTime()  / 1000;

    //EXP ES UN ATRIBUTO DEL PAYLOAD Q REFIERE A LA FECHA DE EXPIRACION DE TOKEN.
    //SI LA FECHA DE EXPIRACION DEL TOKEN ES MENOR A AHORA, RETURN TRUE.
    if(payload.exp < now){
      return true;
    }
    return false;
  }


  private authService : AuthService;
  private router : Router;

}
