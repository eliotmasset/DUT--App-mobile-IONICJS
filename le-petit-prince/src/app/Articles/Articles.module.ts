import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArticlesPage } from './Articles.page';
import { IonicStorageModule } from '@ionic/storage';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RouterModule } from '@angular/router';

import { ArticlesPageRoutingModule } from './Articles-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    ArticlesPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [ArticlesPage]
})
export class ArticlesPageModule {}
