import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


//157 SE CREA UN GUARD PARA VALIDAR LOS ROLES DEL USUARIO

//ESTE GUARD CONTIENE AL PRINCIPIO LA MISMA FUNCIONALIDAD Q EL AUTH.GUARD, POR LO TANTO SE PODRÍA QUITAR EL AuthGuard DEL APP.MODULE Y FUNCIONARIA =.

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(authService : AuthService, router : Router){
    this.authService = authService;
    this.router = router;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //SI NO ESTÁ AUTHETICADO Q RETORNE FALSE.
      if(!this.authService.isAuthenticated()){
        this.router.navigate(['/login']);
        return false;
      }


      //SE OBTIENE EL ROLE QUE SE VA A VALIDAR
      let role = route.data['role'] as string;
      console.log(role);
      //SE VALIDA EL ROLE
      if(this.authService.hasRole(role)){
        return true
      }

      swal.fire('Acceso Denegado', `Hola ${this.authService.usuario.username} no tienes acceso a este recurso`, 'warning');
      this.router.navigate(['/clientes']);
      return false;
  }



  private authService : AuthService;
  private router : Router;

}
