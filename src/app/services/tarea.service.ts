import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {


  private _tareas = signal([
    { id: 1, titulo: 'Tarea 1', descripcion: 'HTML', estaCompletada: false, fechaLimite: '2026-05-30' },
    { id: 2, titulo: 'Tarea 2', descripcion: 'API', estaCompletada: true, fechaLimite: '2026-05-25' },
    { id: 3, titulo: 'Tarea 3', descripcion: 'Compra', estaCompletada: false, fechaLimite: '2026-06-01' }
  ]);

  tareas = this._tareas.asReadonly();

 
  totalPendientes = computed(() =>
    this._tareas().filter(t => !t.estaCompletada).length
  );

 
  completar(id: number) {
    this._tareas.update(tareas =>
      tareas.map(t =>
        t.id === id ? { ...t, estaCompletada: true } : t
      )
    );
  }

  eliminar(id: number) {
    this._tareas.update(tareas =>
      tareas.filter(t => t.id !== id)
    );
  }
}