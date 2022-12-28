import {Component} from '@angular/core';
import { AuthService } from '../usuarios/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector : 'app-header',
  //template : ``
  templateUrl : './header.component.html'
})

export class HeaderComponent{

  constructor(authService : AuthService, router : Router){
    this.authService = authService;
    this.router = router;
  }

  logout() : void {
    let username = this.authService.usuario.username;
    this.authService.logout();
    swal.fire('Logout', `${username} has cerrado sesión con éxito`, 'success');
    this.router.navigate(['/login']);
  }


  title : string = 'AppAngular';
  authService : AuthService;
  private router : Router;
}
