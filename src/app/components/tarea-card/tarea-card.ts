import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoTareaPipe } from '../../pipes/estado-tarea-pipe';
import { DiasRestantesPipe } from '../../pipes/dias-restantes-pipe';
import { OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tarea-card',
  standalone: true,
  imports: [CommonModule, EstadoTareaPipe, DiasRestantesPipe],
  templateUrl: './tarea-card.html',
  styleUrls: ['./tarea-card.css']
})
export class TareaCardComponent implements OnChanges {

  @Input() tarea: any;

  @Output() completar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  onCompletar() {
    this.completar.emit(this.tarea.id);
  }

  onEliminar() {
    this.eliminar.emit(this.tarea.id);
  }
  ngOnChanges(changes: SimpleChanges) {
  if (changes['tarea'] && !changes['tarea'].firstChange) {
    console.log('La tarea cambió');
  }
}
}