import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'conductor',
    loadComponent: () => import('./conductor/conductor.page').then( m => m.ConductorPage)
  },
  {
    path: 'alumno',
    loadComponent: () => import('./alumno/alumno.page').then( m => m.AlumnoPage)
  },
  {
    path: 'alumno/:id',
    loadComponent: () => import('./alumno/alumno.page').then( m => m.AlumnoPage)
  },
  {
    path: 'ingresoviaje',
    loadComponent: () => import('./ingresoviaje/ingresoviaje.page').then( m => m.IngresoviajePage)
  },
  {
    path: 'viaje',
    loadComponent: () => import('./viaje/viaje.page').then( m => m.ViajePage)
  },
  {
    path: 'auto',
    loadComponent: () => import('./auto/auto.page').then( m => m.AutoPage)
  },
  {
    path: 'intro',
    loadComponent: () => import('./intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'registrar',
    loadComponent: () => import('./registrar/registrar.page').then( m => m.RegistrarPage)
  },



];
