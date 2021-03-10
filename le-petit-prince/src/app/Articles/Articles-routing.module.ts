import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPage } from './Articles.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesPageRoutingModule {}
