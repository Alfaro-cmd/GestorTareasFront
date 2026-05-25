import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoTareaPipe } from '../../pipes/estado-tarea-pipe';
import { DiasRestantesPipe } from '../../pipes/dias-restantes-pipe';

@Component({
  selector: 'app-tarea-card',
  standalone: true,
  imports: [CommonModule, EstadoTareaPipe, DiasRestantesPipe],
  templateUrl: './tarea-card.html',
  styleUrls: ['./tarea-card.css']
})
export class TareaCardComponent {

  @Input() tarea: any;

  @Output() completar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  onCompletar() {
    this.completar.emit(this.tarea.id);
  }

  onEliminar() {
    this.eliminar.emit(this.tarea.id);
  }
}