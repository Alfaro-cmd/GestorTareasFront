import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaCardComponent } from './components/tarea-card/tarea-card';
import { TareaService } from './services/tarea.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TareaCardComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  constructor(public tareaService: TareaService) {}

  onCompletar(id: number) {
    this.tareaService.completar(id);
  }

  onEliminar(id: number) {
    this.tareaService.eliminar(id);
  }
}