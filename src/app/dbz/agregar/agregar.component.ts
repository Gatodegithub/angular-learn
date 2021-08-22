import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  constructor(private dbzService: DbzService) {}

  @Input()
  public nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // creo un evento que retorna un Personaje
  // @Output()
  // public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // this.onNewPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 };
  }
}
