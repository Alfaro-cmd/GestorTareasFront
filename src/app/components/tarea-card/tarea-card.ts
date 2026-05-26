import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
export class TareaCardComponent implements OnChanges {
  @Input() tarea: any = {
    titulo: '',
    estaCompletada: false,
    fechaLimite: null
  };

  @Output() completar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  onCompletar(): void {
    this.completar.emit(this.tarea.id);
  }

  onEliminar(): void {
    this.eliminar.emit(this.tarea.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tarea'] && !changes['tarea'].firstChange) {
      console.log('La tarea cambió');
    }
  }
}