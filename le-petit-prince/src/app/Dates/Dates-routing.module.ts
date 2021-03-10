import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatesPage } from './Dates.page';

const routes: Routes = [
  {
    path: '',
    component: DatesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatesPageRoutingModule {}
