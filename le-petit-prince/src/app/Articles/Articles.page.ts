import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Articles',
  templateUrl: 'Articles.page.html',
  styleUrls: ['Articles.page.scss']
})
export class ArticlesPage {

  datas:any;
  images:any;
  fav: boolean;
  favs: any;

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

  update() {
    this.fav=!this.fav;
  }

  canBeDisplay(article) {
    if(!this.fav)
      return true;
    else
    { 
      if(this.favs.indexOf(article)==-1)
        return false;
      return true;
    }
  }

  add_tofavs(fav) {
    if(!this.isInFavs(fav))
    { 
      this.favs.push(fav);
    }
    else
      this.favs=this.favs.filter(function(value, index, arr){ 
        return JSON.stringify(value) != JSON.stringify(fav);
    });
    this.storage.set('favs', this.favs);
  }

  isInFavs(article) {
    for(let fav of this.favs)
      if(JSON.stringify(fav)==JSON.stringify(article))
        return true;
    return false;
  }

  constructor(private router: Router,private storage: Storage,private http: HttpClient) {
    this.favs=[];
    
    storage.get('favs').then((valeur) => {
      if(valeur!=null)
        this.favs=valeur;
    });
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
