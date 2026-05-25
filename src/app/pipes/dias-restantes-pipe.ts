import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diasRestantes',
  standalone: true
})
export class DiasRestantesPipe implements PipeTransform {
  transform(fecha: string): string {
    const hoy = new Date();
    const limite = new Date(fecha);

    const diff = Math.ceil((limite.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

    return diff + ' días restantes';
  }
}