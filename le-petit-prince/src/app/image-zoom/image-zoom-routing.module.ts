import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageZoomPage } from './image-zoom.page';

const routes: Routes = [
  {
    path: '',
    component: ImageZoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageZoomPageRoutingModule {}
