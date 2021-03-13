import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GaleriesPage } from './Galeries.page';
import { HttpClientModule } from '@angular/common/http';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GaleriesPageRoutingModule } from './Galeries-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    GaleriesPageRoutingModule
  ],
  declarations: [GaleriesPage]
})
export class GaleriesPageModule {}
