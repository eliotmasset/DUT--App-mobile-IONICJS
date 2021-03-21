import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageZoomPageRoutingModule } from './image-zoom-routing.module';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

import { ImageZoomPage } from './image-zoom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageZoomPageRoutingModule
  ],
  declarations: [ImageZoomPage],
  providers: [FileTransfer, FileTransferObject, File]
})
export class ImageZoomPageModule {}
