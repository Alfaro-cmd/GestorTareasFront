import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoTarea',
  standalone: true
})
export class EstadoTareaPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Completada' : 'Pendiente';
  }
}