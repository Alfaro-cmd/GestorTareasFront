import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaCardComponent } from './components/tarea-card/tarea-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TareaCardComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  tareas = [
    { id: 1, titulo: 'Tarea 1', descripcion: 'HTML', estaCompletada: false, fechaLimite: '2026-05-30' },
    { id: 2, titulo: 'Tarea 2', descripcion: 'API', estaCompletada: true, fechaLimite: '2026-05-25' },
    { id: 3, titulo: 'Tarea 3', descripcion: 'Compra', estaCompletada: false, fechaLimite: '2026-06-01' }
  ];

  onCompletar(id: number) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) tarea.estaCompletada = true;
  }

  onEliminar(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }
}