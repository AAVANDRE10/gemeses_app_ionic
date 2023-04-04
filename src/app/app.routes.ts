import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicial',
    pathMatch: 'full',
  },
  {
    path: 'folder',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'apresentacao-localidade',
    loadComponent: () => import('./apresentacao-localidade/apresentacao-localidade.page').then( m => m.ApresentacaoLocalidadePage)
  },
  {
    path: 'inicial',
    loadComponent: () => import('./inicial/inicial.page').then( m => m.InicialPage)
  },
  {
    path: 'turistico',
    loadComponent: () => import('./turistico/turistico.page').then( m => m.TuristicoPage)
  },
  {
    path: 'personalidades',
    loadComponent: () => import('./personalidades/personalidades.page').then( m => m.PersonalidadesPage)
  },
  {
    path: 'clubes-desportivos',
    loadComponent: () => import('./clubes-desportivos/clubes-desportivos.page').then( m => m.ClubesDesportivosPage)
  },
];
