import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';
import { AccueilPage } from './Accueil.page';
import { IonicStorageModule } from '@ionic/storage';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AccueilPageRoutingModule } from './Accueil-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    AccueilPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [AccueilPage],
  providers: [HTTP]
})
export class AccueilPageModule {}
