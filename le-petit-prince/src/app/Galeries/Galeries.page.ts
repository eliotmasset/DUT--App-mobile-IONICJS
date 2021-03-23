import { ImageZoomPage } from './../image-zoom/image-zoom.page';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Galeries',
  templateUrl: 'Galeries.page.html',
  styleUrls: ['Galeries.page.scss']
})
export class GaleriesPage {

  slideOpts = {
    initialSlide: 0,
    speed: 300,
    effect: 'flip',
    spaceBetween: 100
  };

  datas:any;

  async zoom(url)
  {
    var name=url;
    url="http://www.sebastien-thon.fr/cours/M4104Cip/projet/images/"+url;
    const modal = await this.modalController.create({
      component: ImageZoomPage,
      componentProps: { img: url, name:  name},
      cssClass: 'img-modal'
      });
      return await modal.present();  
  }

  async refresh(e){
    this.storage.get('login').then((valeur) => {
      if(valeur=="")
        this.router.navigate(['/']);
      this.storage.get('mdp').then((mdp) => {
        this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login='+valeur+'&mdp='+mdp)
                        .subscribe((data) => {
                          this.datas = data; 
                          e.target.complete();
        });
      });
    });
  }

  constructor(private router: Router,private storage: Storage,private http: HttpClient, public modalController: ModalController) {
    storage.get('login').then((valeur) => {
      if(valeur=="")
        this.router.navigate(['/']);
      storage.get('mdp').then((mdp) => {
        this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login='+valeur+'&mdp='+mdp)
                        .subscribe((data) => {
                          this.datas = data;
        });
      });
    });
  }

}
