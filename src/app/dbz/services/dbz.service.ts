import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  constructor() {}

  public agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Veggeta',
      poder: 7500,
    },
  ];

  public get personajes(): Personaje[] {
    // Javascript trabaja los valores no primitivos object, array, function por REFERENCIA, osea que se mutara el array original si este se modifica desde una referencia, por lo tanto devuelvo un nuevo array)
    return [...this._personajes];
  }

}
