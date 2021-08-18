import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroes: string[] = [
    'Leandro-man',
    'Ironman',
    'Hulk',
    'Thor',
    'Aldo-man',
  ];
  public heroeBorrado: string = '';

  public borrarHeroe(): void {
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }

}
