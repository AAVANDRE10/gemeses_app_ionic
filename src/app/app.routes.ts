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
    path: 'apresentacao-pessoal',
    loadComponent: () => import('./apresentacao-pessoal/apresentacao-pessoal.page').then( m => m.ApresentacaoPessoalPage)
  },
  {
    path: 'apresentacao-localidade',
    loadComponent: () => import('./apresentacao-localidade/apresentacao-localidade.page').then( m => m.ApresentacaoLocalidadePage)
  },
  {
    path: 'inicial',
    loadComponent: () => import('./inicial/inicial.page').then( m => m.InicialPage)
  },
];
