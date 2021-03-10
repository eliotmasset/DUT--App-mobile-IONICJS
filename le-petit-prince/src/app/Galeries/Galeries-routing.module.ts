import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriesPage } from './Galeries.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriesPageRoutingModule {}
