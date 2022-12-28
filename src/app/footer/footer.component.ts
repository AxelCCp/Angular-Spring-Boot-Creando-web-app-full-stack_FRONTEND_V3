import { Component } from '@angular/core';
@Component({
  selector : 'app-footer',
  templateUrl : './footer.component.html',
  styleUrls : ['./footer.component.css']
})
export class FooterComponent {

                //ES UN TIPO GENERICO
  public autor : any = {nombre : 'Andres', apellido : 'Guzmán'};
}
