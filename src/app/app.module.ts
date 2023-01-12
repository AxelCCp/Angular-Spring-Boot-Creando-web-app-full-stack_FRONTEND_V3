import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; //PARA LA CONEXIÓN CON EL BACK
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleComponent } from './clientes/detalle/detalle.component';
import { LoginComponent } from './usuarios/login.component';   //PARA TRABAJAR CON FORMULARIOS.
//import { MatDatepickerModule } from '@angular/material/core'
//import { /*MatDatepickerModule*/  MatNativeDateModule } from '@angular/material/core'
import { AuthGuard } from './usuarios/guards/auth.guard';             //156 PARA REGISTRAR EL O LOS GUARDS Q SE TENGAN.
import { RoleGuard } from './usuarios/guards/role.guard';             //157 PARA REGISTRAR EL O LOS GUARDS Q SE TENGAN.
import { TokenInterceptor } from './usuarios/interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './usuarios/interceptors/auth.interceptor';
import { DetalleFacturaComponent } from './facturas/detalle-factura.component';
import { FacturasComponent } from './facturas/facturas.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';  //CLASE 180
import {MatInputModule} from '@angular/material/input';                //CLASE 180
import {MatFormFieldModule} from '@angular/material/form-field';       //CLASE 180
import { ReactiveFormsModule } from '@angular/forms';                  //CLASE 180

const routes : Routes = [
  {path:'', redirectTo:'/clientes', pathMatch:'full'},    //ESTE ES EL HOME Y REDIRIGE A CLIENTES. PATHMATCH FULL : HACE MATCH COMPLETO CON LA URL.
  {path:'directivas', component:DirectivaComponent},
  {path:'clientes', component:ClientesComponent},  //RUTA CON LIST
  {path:'clientes/form', component:FormComponent, canActivate:[AuthGuard, RoleGuard], data: {role:'ROLE_ADMIN'}},          //SE PASA AuthGuard PARA VERIFICAR AUTENTICACIÓN. //SE PASA RoleGuard Y PARÁMETRO ROLE PARA VALIDAR EL ROLE Q TIENE EL USUARIO.
  {path:'clientes/form/:id', component:FormComponent, canActivate:[AuthGuard, RoleGuard], data: {role:'ROLE_ADMIN'}},
  {path:'clientes/page/:page', component:ClientesComponent}, //RUTA CON PAGE
  //{path:'clientes/ver/:id', component:DetalleComponent},    //SE QUITA PQ SE CAMBIA POR UN MODAL.
  {path:'login', component:LoginComponent},
  {path:'facturas/:id', component:DetalleFacturaComponent, canActivate:[AuthGuard, RoleGuard], data: {role:'ROLE_USER'}},
  {path:'facturas/form/:clienteId', component:FacturasComponent, canActivate:[AuthGuard, RoleGuard], data: {role:'ROLE_ADMIN'}}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    LoginComponent,
    DetalleFacturaComponent,
    FacturasComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    //MatDatepickerModule,
    //MatNativeDateModule
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    ClienteService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
