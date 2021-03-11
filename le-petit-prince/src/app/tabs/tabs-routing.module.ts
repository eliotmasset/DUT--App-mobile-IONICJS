import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Articles',
        loadChildren: () => import('../Articles/Articles.module').then(m => m.ArticlesPageModule)
      },
      {
        path: 'Galeries',
        loadChildren: () => import('../Galeries/Galeries.module').then(m => m.GaleriesPageModule)
      },
      {
        path: 'Accueil',
        loadChildren: () => import('../Accueil/Accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
