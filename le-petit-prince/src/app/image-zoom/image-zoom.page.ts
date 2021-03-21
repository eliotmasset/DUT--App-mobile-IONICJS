import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.page.html',
  styleUrls: ['./image-zoom.page.scss'],
})
export class ImageZoomPage implements OnInit {

  url:string;

  constructor(navParams: NavParams, private nav:NavController, private modalCtrl:ModalController, private transfer: FileTransfer, private file: File,public toastController: ToastController) { 
    this.url=navParams.get('img');
    console.log(this.url);
  }

  ngOnInit() {
  }

  async toast(head,text)
  {
    const toast = await this.toastController.create({
      header: head,
      message: text,
      position: 'bottom',
      buttons: [ {
          text: 'Fermer',
          role: 'fermer',
          handler: () => {}
        }
      ]
    });
    toast.present();
  }

  async download() {
    // helper function
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(this.url, this.file.externalRootDirectory + '/Download/' + 'image.png').then((entry) => {
      this.toast("image.png","téléchargement réussie !");
    }, (error) => {
      this.toast("Erreur","échec du téléchargement à l'adresse : "+this.url);
    });

  }

  close()
  {
    this.modalCtrl.dismiss();
  }

}
