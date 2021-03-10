import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatesPage } from './Dates.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DatesPageRoutingModule } from './Dates-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: DatesPage }]),
    DatesPageRoutingModule,
  ],
  declarations: [DatesPage]
})
export class DatesPageModule {}
