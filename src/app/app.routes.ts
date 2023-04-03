import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
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
];
