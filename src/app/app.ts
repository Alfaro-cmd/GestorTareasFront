import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaCardComponent } from './components/tarea-card/tarea-card';
import { LoginComponent } from './components/login/login';

import { TareaService } from './services/tarea.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TareaCardComponent, LoginComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  constructor(
    public tareaService: TareaService,
    public authService: AuthService
  ) {}

  onCompletar(id: number) {
    this.tareaService.completar(id);
  }

  onEliminar(id: number) {
    this.tareaService.eliminar(id);
  }
}