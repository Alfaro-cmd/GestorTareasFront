import { Routes } from '@angular/router';
import { TareaCardComponent } from './components/tarea-card/tarea-card';

export const routes: Routes = [

  // (lazy loading)
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login')
        .then(m => m.LoginComponent)
  },

  // Tareas 
  {
    path: 'tareas',
    // loadComponent: () =>
    //   import('./components/tarea-card/tarea-card')
    //     .then(m => m.TareaCardComponent)
    component: TareaCardComponent
  },
    // Ruta raíz 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];