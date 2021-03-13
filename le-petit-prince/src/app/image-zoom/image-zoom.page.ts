import { Component, OnInit } from '@angular/core';
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

  close()
  {
  this.modalCtrl.dismiss();
  }

}
