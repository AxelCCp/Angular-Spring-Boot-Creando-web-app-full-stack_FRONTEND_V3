import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {


  constructor(authService : AuthService, router : Router) {
    this.usuario = new Usuario;
    this.authService = authService;
    this.router = router;
  }


  ngOnInit(): void {

    //PREGUNTA SI ESTÁ AUTENTICADO Y REDIRIGE A CLIENTES.
    if(this.authService.isAuthenticated()){
      swal.fire('Login',`Hola ${this.authService.usuario.username} ya estás autenticado!`, 'info');
      this.router.navigate(['/clientes']);
    }

  }


  login() : void {
    console.log(this.usuario);
    if(this.usuario.username==null || this.usuario.password==null){
      swal.fire('Error login','Username o password vacío.', 'error');
      return;   //SE SALE.
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);

      /*
      //EL PAYLOAD ES LA 2DA PARTE DEL TOKEN Q TIENE LOS DATOS DEL USUARIO.............
      let payload = JSON.parse(atob(response.access_token.split(".")[1]));     //SE CONVIERTE EL TOKEN EN UN ARREGLO, SEGÚN LAS SEPARACIONES Q TIENE CON EL PUNTO. Y SE OBTINENEN LOS DATOS DEL ACCESO Q ESTAN EN EL 1. CON ATOB() SE DECODIFICA DESDE BASE64. JSON : SE PASA A JON PARA PODER LEERLO.
      console.log(payload);
      //...............................................................................
      */

      //PARA GUARDAR LOS DATOS EN EL SESSION STORAGE.
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);

      let usuario = this.authService.usuario;  //SE LLAMA AL GETTER DE USUARIO. ESTE SE PONE SIN LOS ().

      this.router.navigate(['/clientes']);
      swal.fire('Login', `Hola ${usuario.username}, has iniciado sesión con éxito!`, 'success');
      //MANEJANDO EL ERROR EN CASO DE INGRESAR CREDENCIALES INCORRECTAS EN EL LOGIN.
    }, err => {
      if(err.status == 400){
        swal.fire('Error login','Usuario o clave incorrectas!', 'error');
      }
    });
  }




  titulo : string = 'Iniciar sesión';
  usuario : Usuario;
  private authService : AuthService;
  private router : Router;
}
