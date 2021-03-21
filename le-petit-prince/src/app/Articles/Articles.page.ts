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
  in_search: any;
  searchTerm : string;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    zoom:true,
    passiveListeners: false,
  };

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
    if(this.searchTerm=="")
    {
      if(!this.fav)
        return true;
      else
      { 
        if(!this.isInFavs(article))
          return false;
        return true;
      }
      return true;
    }
    if(this.in_search.indexOf(article)!=-1)
    {
      if(!this.fav)
        return true;
      else
      { 
        if(!this.isInFavs(article))
          return false;
        return true;
      }
      return false;
    }
    return false;
  }

  filterList(evt) {
    this.searchTerm = evt.srcElement.value;
    this.in_search = this.datas.articles.filter(searchItem => {
        return (searchItem.titre.toLowerCase().indexOf(this.searchTerm.toLowerCase()) != -1 || searchItem.texte.toLowerCase().indexOf(this.searchTerm.toLowerCase()) != -1);
    });
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
    this.in_search=[];
    this.searchTerm = "";
    
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
