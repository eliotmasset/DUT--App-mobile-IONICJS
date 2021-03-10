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
        path: 'Dates',
        loadChildren: () => import('../Dates/Dates.module').then(m => m.DatesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Articles',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Galeries',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
