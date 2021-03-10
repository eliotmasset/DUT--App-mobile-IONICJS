import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlesPage } from './Articles.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ArticlesPageRoutingModule } from './Articles-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ArticlesPageRoutingModule
  ],
  declarations: [ArticlesPage]
})
export class ArticlesPageModule {}
