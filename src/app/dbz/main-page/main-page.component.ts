import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  
  public nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1500,
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    // debugger;
    // this.personajes.push(argumento);
  }

  // Creo una instancia de mi servicio para obtener los datos
  constructor(){}

}
