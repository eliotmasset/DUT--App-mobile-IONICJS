import { Component, OnInit } from '@angular/core';
import { FilesystemDirectory } from '@capacitor/core/dist/esm/core-plugin-definitions';
import { Filesystem } from '@capacitor/core/dist/esm/web/filesystem';
import { NavController, ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.page.html',
  styleUrls: ['./image-zoom.page.scss'],
})
export class ImageZoomPage implements OnInit {

  url:string;

  constructor(navParams: NavParams, private nav:NavController, private modalCtrl:ModalController) { 
    this.url=navParams.get('img');
    console.log(this.url);
  }

  ngOnInit() {
  }

  async download() {
    // helper function
    const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
      const reader = new FileReader;
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
    reader.readAsDataURL(blob);
    });
        // retrieve the image
    const response = await fetch(this.url);
    // convert to a Blob
    const blob = await response.blob();
    // convert to base64 data, which the Filesystem plugin requires
    const base64Data = await convertBlobToBase64(blob) as string;
          
    const savedFile = await Filesystem.writeFile({
      path: "/image.png",
      data: base64Data,
      directory: FilesystemDirectory.Data
    });

  }

  close()
  {
    this.modalCtrl.dismiss();
  }

}
