import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarea-card',
  standalone: true,
  imports: [CommonModule], 
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