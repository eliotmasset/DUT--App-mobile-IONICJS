import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilPage } from './Accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilPageRoutingModule {}
