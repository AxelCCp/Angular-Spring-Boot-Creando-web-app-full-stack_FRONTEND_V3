import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(http : HttpClient) {
    this.http = http;
  }

  login(usuario : Usuario) : Observable<any> {
    const urlEndPoint = "http://localhost:8080/oauth/token";
    const credenciales = btoa('angularapp' + ':' + '12345');                                         //SE ENCRIPTA EN BASE64

    const httpHeaders = new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded',
                                         'Authorization' : 'Basic ' + credenciales});

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username',usuario.username);
    params.set('password',usuario.password);
    console.log(params.toString());

    return this.http.post<any>(urlEndPoint, params.toString(), {headers : httpHeaders});
  }


  guardarUsuario(accessToken:string) : void {
    let payload = this.obtenerDatostoken(accessToken);
    this._usuario = new Usuario();
    this._usuario.nombre = payload.nombre;
    console.log('this._usuario.nombre = payload.nombre;');
    this._usuario.apellido = payload.apellido;
    this._usuario.email = payload.email;
    this._usuario.username = payload.user_name;
    this._usuario.roles = payload.authorities;
    //SE GUARDAN LOS DATOS EN EL SESSION STORAGE. GUARDA DATOS EN LA SESIÓN DEL NAVEGADOR. ESTE MÉTODO JAVASCRIPT ES PARTE DE HTML5.
    //stringify : EL METODO setItem() DEBE RECIBIR UN STRING Y PARA ESTO, SE PASA EL OBJ _USUARIO A UN JSON PLANO DE STRING, CON stringify.
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }


  guardarToken(accessToken:string) : void {
    this._token = accessToken;
    sessionStorage.setItem('token',accessToken);
  }


  obtenerDatostoken(accessToken:string) : any {
    if(accessToken!=null){
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }


  public get usuario() : Usuario {
    if(this._usuario != null){
      return this._usuario;
    }
    else if(this._usuario == null && sessionStorage.getItem('usuario') != null){
      //SE OBTINE EL USUARIO. SE PASA A JSON, YA Q SE GUARDÓ COMO TEXTO y LUEGO SE PASA A USUARIO. y FINALMENTE SE ASIGNA AL TRIBUTO USUARIO.
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }


  public get token() : string {
    if(this._token != null){
      return this._token;
    }
    else if(this._token == null && sessionStorage.getItem('token') != null){
      //SE OBTINE EL USUARIO. SE PASA A JSON, YA Q SE GUARDÓ COMO TEXTO y LUEGO SE PASA A USUARIO. y FINALMENTE SE ASIGNA AL TRIBUTO USUARIO.
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }


  //PARA SABER SI YA ESTÁ AUTENTICADO Y NO VOLVER A LA PÁGINA DE LOGIN.  //this.token : LLAMA AL MÉTODO GET TOKEN.
  isAuthenticated() : boolean {
      let payload = this.obtenerDatostoken(this.token);
      if(payload != null && payload.user_name && payload.user_name.length > 0){
        return true;
      }
      return false;
  }

  logout() : void {
    this._token = null;
    this._usuario = null;

    sessionStorage.clear();                 // SE BORRA TODA LA INFO DEL SESSION STORAGE.
    sessionStorage.removeItem('token');       //TAMBN SE PUEDE ELIMINAR LA INFO POR SEPARADO POR SI EES Q NO SE QUIERE ELIMINAR TODO.
    sessionStorage.removeItem('usuario');

  }


  //154 PARA OCULTAR LOS BOTONES DEPENDIENDO DEL ROLE DEL Usuario
  hasRole(role : string) : boolean {
    //this.usuario : ESTE ES EL GETTER
    if(this.usuario.roles.includes(role)){
      return true;
    }
    return false;
  }


  private http : HttpClient;
  private _usuario : Usuario;
  private _token : string;
}
